
import { Routes } from '@angular/router';
import { ListAllCustomers } from './pages/customers/list-all-customers/list-all-customers';
import { InitialPageDemo } from './pages/initial-page-demo/initial-page-demo';

export const GLOBAL_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'start' },
  { path: 'start', component: InitialPageDemo },
  { path: 'customers', component: ListAllCustomers }
];
