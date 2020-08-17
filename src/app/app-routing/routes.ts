import { Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { LoanComponent } from './../loan/loan.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'loan', component: LoanComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];