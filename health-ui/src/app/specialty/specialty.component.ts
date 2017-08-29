import { Component, OnInit } from '@angular/core';

import {Specialty} from './specialty.model';
import {SpecialtyService} from './specialty.service';
 
@Component({
  selector: 'specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.css']
})
export class SpecialtyComponent implements OnInit {
  private specialtyList:Specialty[];
  private selectedSpecialty:Specialty;
  private editMode:boolean;

  constructor(private service:SpecialtyService) { }

  ngOnInit() {
    this.updateList();
  }

  onSelectDetail(specialty:Specialty) : void {
    this.selectedSpecialty = {...specialty};
    this.editMode = true;
  }

  onSelectNew() : void {
    this.selectedSpecialty = Specialty.empty();
  }

  onSave() : void {
    if (this.editMode) {
      this.service.update(this.selectedSpecialty).subscribe(
        specialty => {
          this.selectedSpecialty = null;
          this.updateList();
        },
        error => console.log("Error updatingSpecialty ", error)
      );
    } else {
      this.service.save(this.selectedSpecialty).subscribe(
        specialty => {
          this.selectedSpecialty = specialty;
          this.specialtyList.push(specialty);
        },
        error => console.log("Error savingSpecialty ", error)
      );
    }
  }

  onDelete(specialty:Specialty) :void {
    this.service.delete(specialty).subscribe(
      resp => {
        if(resp.ok) {
          this.updateList();
        }
      },
      error => console.log("Error deletingSpecialty ", error)
    );
  }

  private updateList() : void {
    this.service.list().subscribe(
      specialties => {
        this.specialtyList = specialties;
      },
      error => {
        console.log("Error listing Specialties ::: ", error);
      }
    );
  }
}
