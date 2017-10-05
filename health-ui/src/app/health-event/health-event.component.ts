import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { AbstractComponent } from '../shared_components/abstractComponent';
import { Patient } from '../patient/patient.model';
import { Specialty } from '../specialty/specialty.model';
import { Survey } from '../survey/survey.model';
import { HealthEvent } from './health-event.model';

import { PatientService } from '../patient/patient.service';
import { HealthEventService } from './health-event.service';
import { SurveyService } from '../survey/survey.service';

@Component({
  selector: 'app-health-event',
  templateUrl: './health-event.component.html',
  styleUrls: ['./health-event.component.css']
})
export class HealthEventComponent extends AbstractComponent {
  patient: Patient;
  filteredEvents: HealthEvent[];
  newEvent: HealthEvent;
  selectedSpecialty: Specialty;
  private surveys: Survey[];
  private specialties: Specialty[];
  private filteredBasicSurveys: Survey[];



  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private healthEventService: HealthEventService,
    private surveyService: SurveyService) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let patientId = params['patientId'];
      this.buildPatientInfo(patientId);
      this.buildSurveysInfo(patientId);
    }
    );
  }

  private buildPatientInfo(patientId: number): void {
    this.handleRequest(
      this.patientService.find(patientId), patient => {
        this.patient = patient;
      }
    );
  }

  private buildSurveysInfo(patientId: number): void {
    this.handleRequest(
      this.surveyService.list(patientId), surveys => {
        this.surveys = surveys;
        this.buildSpecialtyInfo(surveys);
        this.filteredBasicSurveys = this.buildFilteredBasicSurveys(surveys);
        this.filteredEvents = this.buildFilteredEvents(surveys);
      }
    );
  }

  private buildSpecialtyInfo(surveys: Survey[]) {
    this.specialties = this.buildSpecialtiesFilter(surveys);

    if (this.specialties.length > 0 && !this.selectedSpecialty) {
      this.selectedSpecialty = this.specialties[0];
    }

    console.log(this.selectedSpecialty);
  }

  private buildSpecialtiesFilter(surveys: Survey[]): Specialty[] {
    let uniqueSpecialties = new Map<number, Specialty>();
    surveys
      .map(survey => survey.template.specialty)
      .forEach(item => uniqueSpecialties.set(item.id, item));
    return Array.from(uniqueSpecialties.values());
  }

  private buildFilteredBasicSurveys(surveys: Survey[]): Survey[] {
    return surveys.filter(survey =>
      !survey.event
      && survey.template.type === "BASIC_INFO"
      && survey.template.specialty.id === this.selectedSpecialty.id
    );
  }

  private buildFilteredEvents(surveys: Survey[]): HealthEvent[] {
    let uniqueEvents = new Map<number, HealthEvent>();
    surveys
      .filter(survey =>
        survey.event
        && survey.template.specialty.id === this.selectedSpecialty.id
        && survey.template.type === "SPECIALTY_INFO")
      .map(survey => {
        let healthEvent: HealthEvent = survey.event;
        healthEvent.surveys = [survey];
        return healthEvent;
      })
      .forEach(healthEvent => {
        if (uniqueEvents.has(healthEvent.id)) {
          uniqueEvents.get(healthEvent.id).surveys.push(...healthEvent.surveys);
        } else {
          uniqueEvents.set(healthEvent.id, healthEvent);
        }
      });
    return Array.from(uniqueEvents.values());
  }

  selectSpecialtyFilter(selectedSpecialty: Specialty) {
    this.selectedSpecialty = selectedSpecialty;
    this.filteredBasicSurveys = this.buildFilteredBasicSurveys(this.surveys);
    this.filteredEvents = this.buildFilteredEvents(this.surveys);
  }

  onSelectNewEvent(): void {
    this.newEvent = HealthEvent.empty();
  }

  onSaveEvent() {
    this.newEvent.specialty = this.selectedSpecialty;
    this.handleRequest(
      this.healthEventService.save(this.patient.id, this.newEvent),
      healthEvent => {
        this.buildSurveysInfo(this.patient.id);
      }
    );
  }

  onDeleteEvent(event: HealthEvent) {
    if (confirm("Está seguro de eliminar el evento?")) {
      this.handleRequest(
        this.healthEventService.delete(this.patient.id, event),
        resp => {
          if (resp.ok) {
            this.buildSurveysInfo(this.patient.id);
          }
        },
        error => console.log("Error deletingEvent ", error)
      );
    }
  }

  getSurveyStateStyle(state: string) {
    switch (state) {
      case 'NOT_STARTED':
        return 'survey-not-started';
      case 'STARTED':
        return 'survey-started';
      case 'FINISHED':
        return 'survey-solved';
      default:
        return 'survey-invalid-state';
    }
  }
}
