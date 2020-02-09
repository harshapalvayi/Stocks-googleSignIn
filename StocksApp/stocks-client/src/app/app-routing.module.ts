import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartPageComponent} from './core/start-page/start-page.component';
import {LoginPageComponent} from './core/login-page/login-page.component';
import {RoleGuardService} from './role-guard.service';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'app-login-page', component: LoginPageComponent },
  { path: 'app-dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [RoleGuardService]
  },
  { path: 'app-reports',
    loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule),
    canActivate: [RoleGuardService]
  },
  { path: 'app-contacts',
    loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule),
    canActivate: [RoleGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
