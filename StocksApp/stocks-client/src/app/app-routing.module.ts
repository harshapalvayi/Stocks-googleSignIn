import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartPageComponent} from './core/start-page/start-page.component';



const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'app-dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'app-reports', loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule)},
  { path: 'app-contacts', loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
