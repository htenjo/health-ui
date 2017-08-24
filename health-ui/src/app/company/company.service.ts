import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { Company } from './company.model';


@Injectable()
export class CompanyService {
  private endpoint:string = environment.apiBaseUrl + "/company";

  /**
   * 
   * @param authHttp 
   */
  constructor(private authHttp: AuthHttp) { }

  /**
   * 
   */
  list() : Observable<Company []> {
    return this.authHttp.get(this.endpoint)
      .map(resp => <Company[]>resp.json());
  }

  /**
   * 
   */
  save(company:Company) : Observable<Company> {
    return this.authHttp.post(this.endpoint, company)
      .map(resp => <Company>resp.json());
  }

  update(company:Company) : Observable<Company> {
    return this.authHttp.put(this.endpoint, company)
      .map(resp => <Company>resp.json());
  }

  delete(company:Company) : Observable<Response> {
    return this.authHttp.delete(this.endpoint + '/' + company.id);
  }
}
