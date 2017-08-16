import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

import { Company } from './company.model';

@Injectable()
export class CompanyService {
  companyList : Company[] = [
      {id:1, createdDate:'2017-08-01', name:'M4H', nit:'2332435345-6'},
      {id:2, createdDate:'2017-08-05', name:'Fundación SantaFe', nit:'32435345-9'},
      {id:3, createdDate:'2017-08-25', name:'Clinica 3', nit:'32435345-9'},
      {id:4, createdDate:'2017-08-15', name:'Clinica 4', nit:'32435345-9'},
      {id:5, createdDate:'2017-08-05', name:'Clinica 5', nit:'32435345-9'},
      {id:6, createdDate:'2017-08-11', name:'Clinica 6', nit:'32435345-9'},
      {id:7, createdDate:'2017-08-12', name:'Clinica 7', nit:'32435345-9'},
    ];

  constructor(private authHttp: AuthHttp) { }

  /**
   * 
   */
  list() : Company []{
    return this.companyList;
  }

  /**
   * 
   */
  save(company:Company) : Company {
    company.id = 666;
    this.companyList.push(company);
    return company;
  }

  update(company:Company) : Company {
    this.companyList = this.companyList.filter(item => item.id !== company.id);
    this.companyList.push(company);
    return company;
  }

  delete(company:Company) : void {
    this.companyList = this.companyList.filter(item => item.id !== company.id);
  }
}
