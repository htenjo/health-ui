import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { PatientComponent } from './patient/patient.component';
import { SurveyTemplateComponent } from './survey-template/survey-template.component';
import { CallbackComponent } from './shared_components/callback/callback.component';
import { HealthEventComponent } from './health-event/health-event.component';
import { SurveyComponent } from './survey/survey.component';
import { ErrorPageComponent } from './shared_components/error-page/error-page.component';

import { AuthGuard } from './shared_services/guards/auth-guard.service';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'company', component: CompanyComponent, canActivate:[AuthGuard]},
  { path: 'specialty', component: SpecialtyComponent, canActivate:[AuthGuard]},
  { path: 'specialty/:specialtyId/survey-template', component: SurveyTemplateComponent, canActivate:[AuthGuard]},
  { path: 'patient', component: PatientComponent, canActivate:[AuthGuard]},
  { path: 'patient/:patientId/event', component: HealthEventComponent, canActivate:[AuthGuard]},
  { path: 'patient/:patientId/survey/:surveyId', component: SurveyComponent, canActivate:[AuthGuard]},
  { path: 'callback', component: CallbackComponent},
  { path: 'error', component: ErrorPageComponent},
  { path: '**', redirectTo: '' }
];
