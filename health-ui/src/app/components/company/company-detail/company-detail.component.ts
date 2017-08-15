import { Component, OnInit } from '@angular/core';

import { Company } from '../../../model/company';

@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  private selectedCompany : Company;

  constructor() { }

  ngOnInit() {
  } 
}