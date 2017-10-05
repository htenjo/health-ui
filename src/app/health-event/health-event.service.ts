import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { HealthEvent } from './health-event.model';

@Injectable()
export class HealthEventService {
  private endpoint:string = environment.apiBaseUrl + "/patient/";
  private eventEndpoint:string = "/event";

  /**
   * 
   * @param authHttp 
   */
  constructor(private authHttp: AuthHttp) { }

  /**
   * 
   */
  list(patientId:number) : Observable<HealthEvent []> {
    let url = `${this.endpoint}${patientId}${this.eventEndpoint}`;
    return this.authHttp.get(url)
      .map(resp => <HealthEvent[]>resp.json());
  }

  /**
   * 
   */
  save(patientId:number, healthEvent:HealthEvent) : Observable<HealthEvent> {
    let url = `${this.endpoint}${patientId}${this.eventEndpoint}`;
    return this.authHttp.post(url, healthEvent)
      .map(resp => <HealthEvent>resp.json());
  }


  find(patientId:number, healthEventId:number) : Observable<HealthEvent> {
    let url = `${this.endpoint}${patientId}${this.eventEndpoint}/${healthEventId}`;
    return this.authHttp.get(url)
      .map(resp => <HealthEvent>resp.json());
  }

  /**
   * 
   * @param healthEvent 
   */
  update(patientId:number, healthEvent:HealthEvent) : Observable<HealthEvent> {
    let url = `${this.endpoint}${patientId}${this.eventEndpoint}`;
    return this.authHttp.put(url, healthEvent)
      .map(resp => <HealthEvent>resp.json());
  }

  /**
   * 
   */
  delete(patientId:number, healthEvent:HealthEvent) : Observable<Response> {
    let url = `${this.endpoint}${patientId}${this.eventEndpoint}/${healthEvent.id}`;
    return this.authHttp.delete(url);
  }
}
