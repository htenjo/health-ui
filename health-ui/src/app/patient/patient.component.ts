import {Component} from '@angular/core';

import {AbstractComponent} from '../shared_components/abstractComponent';
import {Patient} from './patient.model';
import {PatientService} from './patient.service';


import { Observable, Subscription } from 'rxjs/Rx';
 
@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent extends AbstractComponent {
  patientList:Patient[];
  selectedPatient:Patient;
  private editMode:boolean;

  constructor(private service:PatientService) { 
    super();
  }

  ngOnInit() {
    this.updateList();
  }

  onSelectDetail(patient:Patient) : void {
    this.selectedPatient = {...patient};
    this.editMode = true;
  }

  onSelectNew() : void {
    this.selectedPatient = Patient.empty();
  }

  onSave() : void {
    if (this.editMode) {
      this.handleRequest(
        this.service.update(this.selectedPatient), 
        patient => {
          this.selectedPatient = null;
          this.updateList();
        }
      );
    } else {
      this.handleRequest(
        this.service.save(this.selectedPatient),
        patient => {
          this.selectedPatient = patient;
          this.patientList.push(patient);
        }
      );
    }
  }

  onDelete(patient:Patient) :void {
    if(confirm("Está seguro de eliminar el paciente?")) {
      this.handleRequest(
        this.service.delete(patient),
        resp => {
          if(resp.ok) {
            this.updateList();
          }
        }
      );
    }
  }

  search(searchTerm:string){
    this.handleRequest(
      this.service.search(searchTerm),
      resp => {
       this.patientList = [resp];
      }
    );
  }

  cleanSearch() {
    this.updateList();
  }

  private updateList() : void {
    this.handleRequest(
      this.service.list(),
      patients => {
        this.patientList = patients;
      }
    );
  }
}
