import { Component, ViewChild, ElementRef } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

import { SurveyTemplateService } from './survey-template.service';
import { SpecialtyService } from '../specialty/specialty.service';
import { AbstractComponent } from '../shared_components/abstractComponent';
import { SurveyTemplate } from './survey-template.model';
import { Specialty } from '../specialty/specialty.model';

@Component({
  selector: 'survey-template',
  templateUrl: './survey-template.component.html',
  styleUrls: ['./survey-template.component.css']
})
export class SurveyTemplateComponent extends AbstractComponent {
  surveyList: SurveyTemplate[];
  selectedSurvey: SurveyTemplate;
  private editMode: boolean;
  private specialtyId: number;
  @ViewChild('fileUploadField') fileUploadField: ElementRef;

  /**
   * 
   */
  constructor(
    private route: ActivatedRoute,
    private surveyService: SurveyTemplateService,
    private specialtyService: SpecialtyService) {
    super();
  }

  /**
   * 
   */
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.specialtyId = params['specialtyId'];
        this.updateList(this.specialtyId);
        ;
      }
    );
  }

  onSelectNew(): void {
    this.selectedSurvey = SurveyTemplate.empty();
    this.editMode = false;
  }

  onSelectDetail(survey: SurveyTemplate): void {
    this.selectedSurvey = { ...survey };
    this.editMode = true;
  }

  onSave(): void {
    if (this.editMode) {
      this.handleRequest(
        this.surveyService.update(this.specialtyId, this.selectedSurvey),
        survey => {
          this.selectedSurvey = null;
          this.updateList(this.specialtyId);
        }
      );
    } else {
      this.handleRequest(
        this.surveyService.save(this.specialtyId, this.selectedSurvey),
        survey => {
          this.selectedSurvey = survey;
          this.surveyList.push(survey);
        }
      );
    }
  }

  onDelete(survey: SurveyTemplate): void {
    if (confirm("Está seguro de eliminar la plantilla?")) {
      this.handleRequest(
        this.surveyService.delete(this.specialtyId, survey),
        resp => {
          if (resp.ok) {
            this.updateList(this.specialtyId);
          }
        }
      );
    }
  }

  downloadStatistics(survey: SurveyTemplate) {
    var options = {
      showLabels: true
      , useBom: false
    };

    this.handleRequest(
      this.surveyService.getStatistics(survey),
      resp => {
        let a = document.createElement("a");
        a.href = URL.createObjectURL(resp.blob());
        a.download = "info.csv";
        a.click();
      }
    );

  }

  uploadFileCsv() {
    console.log("::: Sending request to API");
    let fileBrowser = this.fileUploadField.nativeElement;
    let reader = new FileReader();

    if (fileBrowser.files && fileBrowser.files[0]) {
      let csvFile = fileBrowser.files[0];
      reader.readAsText(csvFile);
      reader.onload = () => {
        this.handleRequest(
          this.surveyService.uploadInfo(this.selectedSurvey, reader.result),
          resp => {
            alert(`Se han cargado ${resp.uploadedRows} exitosamente`)
          }
        );
      };
    }
  }

  private updateList(specialtyId: number) {
    this.handleRequest(
      this.surveyService.list(specialtyId),
      surveys => this.surveyList = surveys
    );
  }
}
