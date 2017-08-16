import { Component, OnInit } from '@angular/core';

import { Company } from './company.model';
import { CompanyService } from './company.service';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  private companyList:Company[];
  private selectedCompany:Company;
  private editMode:boolean;

  constructor(private service:CompanyService) { }

  ngOnInit() {
    this.updateList();
  }

  onSelectDetail(company:Company) : void {
    this.selectedCompany = company;
    this.editMode = true;
  }

  onSelectNew() : void {
    this.selectedCompany = Company.empty();
  }

  onSave() : void {
    if (this.editMode) {
      this.selectedCompany = this.service.update(this.selectedCompany);
    } else {
      this.selectedCompany = this.service.save(this.selectedCompany);
    }
    this.updateList();
  }

  onDelete(company:Company) :void {
    this.service.delete(company);
    this.updateList();
  }

  private updateList() : void {
    this.companyList = this.service.list();
  }
}
