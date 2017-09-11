import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { SurveyTemplate } from './survey-template.model';

@Injectable()
export class SurveyTemplateService {
  constructor(private authHttp: AuthHttp) { }

  /**
   * 
   */
  list(specialtyId:number) : Observable<SurveyTemplate []> {
    let url:string = this.buildApiUrl(specialtyId);
    return this.authHttp.get(url)
      .map(resp => <SurveyTemplate[]>resp.json());
  }

  /**
   * 
   */
  save(specialtyId:number, surveyTemplate:SurveyTemplate) : Observable<SurveyTemplate> {
    let url:string = this.buildApiUrl(specialtyId);
    return this.authHttp.post(url, surveyTemplate)
      .map(resp => <SurveyTemplate>resp.json());
  }

  /**
   * 
   */
  update(specialtyId:number, surveyTemplate:SurveyTemplate) : Observable<SurveyTemplate> {
    let url:string = this.buildApiUrl(specialtyId);
    return this.authHttp.put(url, surveyTemplate)
      .map(resp => <SurveyTemplate>resp.json());
  }

  /**
   * 
   */
  delete(specialtyId:number, surveyTemplate: SurveyTemplate) : Observable<Response> {
    let url:string = this.buildApiUrl(specialtyId, surveyTemplate.id);
    return this.authHttp.delete(url);
  }

  /**
   * 
   */
  private buildApiUrl(specialtyId:number, templateId?:number) : string {
    return `${environment.apiBaseUrl}/specialty/${specialtyId}/surveyTemplate/${templateId || ''}`;
  }
}
