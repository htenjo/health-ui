import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AuthService, ACCESS_TOKEN_NAME } from './service/auth/auth.service';

import { CallbackComponent } from './components/callback/callback.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyListComponent } from './components/company/company-list/company-list.component';
import { CompanyDetailComponent } from './components/company/company-detail/company-detail.component';
import { SpecialtyComponent } from './components/specialty/specialty.component';
import { SpecialtyListComponent } from './components/specialty/specialty-list/specialty-list.component';
import { SpecialtyDetailComponent } from './components/specialty/specialty-detail/specialty-detail.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { FooterComponent } from './components/commons/footer/footer.component';

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
    CompanyListComponent,
    CompanyDetailComponent,
    SpecialtyComponent,
    SpecialtyListComponent,
    SpecialtyDetailComponent,
    HeaderComponent,
    FooterComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
