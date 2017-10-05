import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AuthService, ACCESS_TOKEN_NAME } from './shared_services/auth/auth.service';
import { CompanyService } from './company/company.service';
import { SpecialtyService } from './specialty/specialty.service';
import { SurveyTemplateService } from './survey-template/survey-template.service';
import { SurveyService } from './survey/survey.service';
import { PatientService } from './patient/patient.service';
import { HealthEventService } from './health-event/health-event.service';

import { AuthGuard } from './shared_services/guards/auth-guard.service';

import { CallbackComponent } from './shared_components/callback/callback.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { HeaderComponent } from './shared_components/header/header.component';
import { FooterComponent } from './shared_components/footer/footer.component';
import { SurveyTemplateComponent } from './survey-template/survey-template.component';
import { PatientComponent } from './patient/patient.component';
import { HealthEventComponent } from './health-event/health-event.component';
import { SurveyComponent } from './survey/survey.component';
import { ErrorPageComponent } from './shared_components/error-page/error-page.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem(ACCESS_TOKEN_NAME)),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    CompanyComponent,
    SpecialtyComponent,
    HeaderComponent,
    FooterComponent,
    SurveyTemplateComponent,
    PatientComponent,
    HealthEventComponent,
    SurveyComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    CompanyService,
    SpecialtyService,
    SurveyTemplateService,
    SurveyService,
    PatientService,
    HealthEventService,

    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
