import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { SpecialtyComponent } from './components/specialty/specialty.component'
import { CallbackComponent } from './components/callback/callback.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent},
  { path: 'specialty', component: SpecialtyComponent},
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
