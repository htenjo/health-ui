import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import * as SurveyApi from 'survey-angular';

import {SurveyService} from './survey.service';
import {AbstractComponent} from '../shared_components/abstractComponent';
import {Survey} from './survey.model';


@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SurveyComponent extends AbstractComponent implements OnInit {
  private survey:Survey;
  private surveyContainerName:string = 'surveyElement';
  private patientId:number;
  private surveyModel:SurveyApi.ReactSurveyModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private surveyService:SurveyService) { 
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
            this.configureCss();
            SurveyApi.SurveyNG.render(this.surveyContainerName, { model:  this.surveyModel});
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
    this.handleRequest(
      this.surveyService.update(this.patientId, this.survey),
      survey => {
        this.router.navigate([`/patient/${this.patientId}/event`]);
      }
    );
  }


  savePartialAnswers(){
    let surveyAnswers:string = JSON.stringify(this.surveyModel.data);
    this.survey.surveyAnswers = surveyAnswers;
    alert("F*** answers " + surveyAnswers);
    this.handleRequest(
      this.surveyService.update(this.patientId, this.survey),
      survey => {}
    );
  }
}