import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusComponent } from './campus.component';
import { InscriptionsComponent } from './layouts/inscriptions/inscriptions.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { UserManagementComponent } from './layouts/user-management/user-management.component';
import { SubjectManagementComponent } from './layouts/subject-management/subject-management.component';

const routes: Routes = [
  {
    path: '',
    component: CampusComponent,
    children: [
      {
        path: 'inscriptions',
        component: InscriptionsComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'inscriptions',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'user-management',
        component: UserManagementComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'user-management',
        pathMatch: 'full'
      },
      {
        path: 'subject-management',
        component: SubjectManagementComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: 'subject-management',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampusRoutingModule { }
