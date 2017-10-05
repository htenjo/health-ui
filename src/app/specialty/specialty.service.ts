import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { Specialty } from './specialty.model';


@Injectable()
export class SpecialtyService {
  private endpoint:string = environment.apiBaseUrl + "/specialty";

  /**
   * 
   * @param authHttp 
   */
  constructor(private authHttp: AuthHttp) { }

  /**
   * 
   */
  list() : Observable<Specialty []> {
    return this.authHttp.get(this.endpoint)
      .map(resp => <Specialty[]>resp.json());
  }

  /**
   * 
   */
  save(specialty:Specialty) : Observable<Specialty> {
    return this.authHttp.post(this.endpoint, specialty)
      .map(resp => <Specialty>resp.json());
  }


  find(specialtyId:number) : Observable<Specialty> {
    return this.authHttp.get(`${this.endpoint}/${specialtyId}`)
      .map(resp => <Specialty>resp.json());
  }

  /**
   * 
   * @param specialty 
   */
  update(specialty:Specialty) : Observable<Specialty> {
    return this.authHttp.put(this.endpoint, specialty)
      .map(resp => <Specialty>resp.json());
  }

  /**
   * 
   */
  delete(specialty:Specialty) : Observable<Response> {
    return this.authHttp.delete(this.endpoint + '/' + specialty.id);
  }
}
