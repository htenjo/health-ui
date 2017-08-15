import { Component, OnInit } from '@angular/core';

import { Company } from '../../../model/company';
import { CompanyService } from '../../../service/company.service';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  private companyList:Company[];

  constructor(private companyService:CompanyService) { }

  ngOnInit() {
    this.companyList = this.companyService.listCompanies();
  }
}
