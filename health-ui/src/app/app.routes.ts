import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { PatientComponent } from './patient/patient.component';
import { SurveyTemplateComponent } from './survey-template/survey-template.component';
import { CallbackComponent } from './shared_components/callback/callback.component';
import { HealthEventComponent } from './health-event/health-event.component';
import { SurveyComponent } from './survey/survey.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent},
  { path: 'specialty', component: SpecialtyComponent},
  { path: 'specialty/:specialtyId/survey-template', component: SurveyTemplateComponent},
  { path: 'patient', component: PatientComponent},
  { path: 'patient/:patientId/event', component: HealthEventComponent},
  { path: 'patient/:patientId/survey/:surveyId', component: SurveyComponent},
  { path: 'callback', component: CallbackComponent},
  { path: '**', redirectTo: '' }
];
