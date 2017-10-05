import {Component} from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import {SurveyTemplateService} from './survey-template.service';
import {SpecialtyService} from '../specialty/specialty.service';
import {AbstractComponent} from '../shared_components/abstractComponent';
import {SurveyTemplate} from './survey-template.model';
import {Specialty} from '../specialty/specialty.model';

@Component({
  selector: 'survey-template',
  templateUrl: './survey-template.component.html',
  styleUrls: ['./survey-template.component.css']
})
export class SurveyTemplateComponent extends AbstractComponent {
  surveyList:SurveyTemplate[];
  selectedSurvey:SurveyTemplate;
  private editMode:boolean;
  private specialtyId:number;

  /**
   * 
   */
  constructor(
    private route: ActivatedRoute,
    private surveyService:SurveyTemplateService, 
    private specialtyService:SpecialtyService) { 
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

  onSelectNew() : void {
    this.selectedSurvey = SurveyTemplate.empty();
    this.editMode = false;
  }

  onSelectDetail(survey:SurveyTemplate) : void {
    this.selectedSurvey = {...survey};
    this.editMode = true;
  }

  onSave() : void {
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

  onDelete(survey:SurveyTemplate) :void {
    if(confirm("Está seguro de eliminar la plantilla?")) {
      this.handleRequest(
        this.surveyService.delete(this.specialtyId, survey),
        resp => {
          if(resp.ok) {
            this.updateList(this.specialtyId);
          }
        }
      );
    }
  }

  private updateList(specialtyId:number) { 
    this.handleRequest(
      this.surveyService.list(specialtyId),
      surveys => this.surveyList = surveys
    );
  }
}
