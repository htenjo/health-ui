import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as SurveyApi from 'survey-angular';

import { SurveyService } from './survey.service';
import { AbstractComponent } from '../shared_components/abstractComponent';
import { Survey } from './survey.model';


@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SurveyComponent extends AbstractComponent implements OnInit {
  surveyContainerName: string = 'surveyElement';
  patientId: number;
  private survey: Survey;
  private surveyModel: SurveyApi.ReactSurveyModel;
  surveyCompleted:boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private surveyService: SurveyService) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.patientId = params['patientId'];
        let surveyId = params['surveyId'];
        this.handleRequest(
          this.surveyService.find(this.patientId, surveyId),
          survey => {
            this.survey = survey;
            SurveyApi.Survey.cssType = "bootstrap";
            this.surveyModel = new SurveyApi.ReactSurveyModel(this.survey.template.jsSurvey);
            this.surveyModel.data = JSON.parse(this.survey.surveyAnswers);
            let onCompleteCallback = this.onCompleteSurvey.bind(this);
            this.surveyModel.onComplete.add(onCompleteCallback);
            this.surveyModel.showNavigationButtons = false;
            this.surveyModel.showCompletedPage = false;
            this.configureCss();
            SurveyApi.SurveyNG.render(this.surveyContainerName, { model: this.surveyModel });
          }
        );
      }
    );
  }

  private configureCss() {
    SurveyApi.defaultBootstrapCss.navigationButton = "btn btn-primary";
  }

  private onCompleteSurvey(surveyAnswers) {
    let resultAsString = JSON.stringify(surveyAnswers.data);
    this.survey.surveyAnswers = resultAsString;
    this.surveyCompleted = true;
    this.handleRequest(
      this.surveyService.update(this.patientId, this.survey),
      survey => {
        this.router.navigate([`/patient/${this.patientId}/event`]);
        alert("Información guardada");
        this.surveyCompleted = false;
      },
      error => alert("Ha ocurrido un error al guardar la información")
    );
  }


  savePartialAnswers() {
    let surveyAnswers: string = JSON.stringify(this.surveyModel.data);
    this.survey.surveyAnswers = surveyAnswers;
    
    this.handleRequest(
      this.surveyService.update(this.patientId, this.survey),
      survey => alert("Información guardada"),
      error => alert("Ha ocurrido un error al guardar la información")
    );
  }

  isFirstPage(): boolean {
    return this.surveyModel && this.surveyModel.isFirstPage;
  }

  isLastPage(): boolean {
    return this.surveyModel && this.surveyModel.isLastPage;
  }

  prevPage() {
    this.surveyModel.prevPage();
  }

  nextPage() {
    this.surveyModel.nextPage();
  }

  completeLastPage() {
    this.surveyModel.completeLastPage();
  }
  
}