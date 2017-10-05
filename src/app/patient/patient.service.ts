import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { Patient } from './patient.model';


@Injectable()
export class PatientService {
  private endpoint:string = environment.apiBaseUrl + "/patient";

  /**
   * 
   * @param authHttp 
   */
  constructor(private authHttp: AuthHttp) { }

  /**
   * 
   */
  list() : Observable<Patient []> {
    return this.authHttp.get(this.endpoint)
      .map(resp => <Patient[]>resp.json());
  }

  /**
   * 
   */
  save(patient:Patient) : Observable<Patient> {
    return this.authHttp.post(this.endpoint, patient)
      .map(resp => <Patient>resp.json());
  }


  find(patientId:number) : Observable<Patient> {
    return this.authHttp.get(`${this.endpoint}/${patientId}`)
      .map(resp => <Patient>resp.json());
  }

  search(searchTerm:string) : Observable<Patient> {
    return this.authHttp.get(`${this.endpoint}/search/${searchTerm}`)
      .map(resp => <Patient>resp.json());
  }

  /**
   * 
   * @param patient 
   */
  update(patient:Patient) : Observable<Patient> {
    return this.authHttp.put(this.endpoint, patient)
      .map(resp => <Patient>resp.json());
  }

  /**
   * 
   */
  delete(patient:Patient) : Observable<Response> {
    return this.authHttp.delete(this.endpoint + '/' + patient.id);
  }
}
