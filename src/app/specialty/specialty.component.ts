import {Component} from '@angular/core';

import {AbstractComponent} from '../shared_components/abstractComponent';
import {Specialty} from './specialty.model';
import {SpecialtyService} from './specialty.service';


import { Observable, Subscription } from 'rxjs/Rx';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
 
@Component({
  selector: 'specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.css']
})
export class SpecialtyComponent extends AbstractComponent {
  specialtyList:Specialty[];
  selectedSpecialty:Specialty;
  private editMode:boolean;

  constructor(private service:SpecialtyService) { 
    super();
  }

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
      this.handleRequest(
        this.service.update(this.selectedSpecialty), 
        specialty => {
          this.selectedSpecialty = null;
          this.updateList();
        }
      );
    } else {
      this.handleRequest(
        this.service.save(this.selectedSpecialty),
        specialty => {
          this.selectedSpecialty = specialty;
          this.specialtyList.push(specialty);
        }
      );
    }
  }

  onDelete(specialty:Specialty) :void {
    if(confirm("Está seguro de eliminar la especialidad?")) {
      this.handleRequest(
        this.service.delete(specialty),
        resp => {
          if(resp.ok) {
            this.updateList();
          }
        },
        error => {
          if(error.status == 412) {
            alert("La especialidad tiene dependencias que deben ser eliminadas primero.");
          }else {
            console.log(error);
          }
        }
      );
    }
  }

  downloadStatistics(specialty:Specialty) {
    var options = {
      showLabels: true,
      useBom: false,
      headers:['PacienteID', 'Respuestas']
    };
  
    this.handleRequest(
      this.service.getStatistics(specialty),
      resp => { 
        new Angular2Csv(resp, "statistics", options)
      }
    );
    
  }

  private updateList() : void {
    this.handleRequest(
      this.service.list(),
      specialties => {
        this.specialtyList = specialties;
      }
    );
  }
}
