import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { Survey } from '../survey/survey.model';

@Injectable()
export class SurveyService {
  constructor(private authHttp: AuthHttp) { }

  /**
   * 
   */
  list(patientId:number) : Observable<Survey []> {
    let url:string = this.buildApiUrl(patientId);
    return this.authHttp.get(url)
      .map(resp => <Survey[]>resp.json());
  }

  /**
   * 
   */
  find(patientId:number, surveyId:number) : Observable<Survey> {
    let url:string = this.buildApiUrl(patientId, surveyId);
    return this.authHttp.get(url)
      .map(resp => <Survey>resp.json());
  }

  /**
   * 
   */
  update(patientId:number, survey:Survey) : Observable<Survey> {
    let url:string = this.buildApiUrl(patientId);
    return this.authHttp.put(url, survey)
      .map(resp => <Survey>resp.json());
  }

  /**
   * 
   */
  private buildApiUrl(patientId:number, surveyId?:number) : string {
    return `${environment.apiBaseUrl}/patient/${patientId}/survey/${surveyId || ''}`;
  }
}
