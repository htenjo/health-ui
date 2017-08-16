import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { SpecialtyComponent } from './specialty/specialty.component'
import { CallbackComponent } from './shared_components/callback/callback.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent},
  { path: 'specialty', component: SpecialtyComponent},
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
