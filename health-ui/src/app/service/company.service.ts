import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

import { Company } from '../model/company';

@Injectable()
export class CompanyService {

  constructor(private authHttp: AuthHttp) { }

  listCompanies() : Company []{
    let companyList : Company[] = [
      {id:1, createdDate:'2017-08-01', name:'M4H', nit:'2332435345-6'},
      {id:2, createdDate:'2017-08-05', name:'Fundación SantaFe', nit:'32435345-9'},
      {id:3, createdDate:'2017-08-25', name:'Clinica 3', nit:'32435345-9'},
      {id:4, createdDate:'2017-08-15', name:'Clinica 4', nit:'32435345-9'},
      {id:5, createdDate:'2017-08-05', name:'Clinica 5', nit:'32435345-9'},
      {id:6, createdDate:'2017-08-11', name:'Clinica 6', nit:'32435345-9'},
      {id:7, createdDate:'2017-08-12', name:'Clinica 7', nit:'32435345-9'},
    ];
    
    return companyList;
  }
}
