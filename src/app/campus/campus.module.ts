import { NgModule } from '@angular/core';

import { CampusRoutingModule } from './campus-routing.module';
import { CampusComponent } from './campus.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SubjectManagementComponent } from './layouts/subject-management/subject-management.component';
import { UserManagementComponent } from './layouts/user-management/user-management.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { InscriptionsComponent } from './layouts/inscriptions/inscriptions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionCardComponent } from './components/inscription-card/inscription-card.component';

const materialModules = [ MatIconModule ];

@NgModule({
  declarations: [
    CampusComponent,
    SidebarComponent,
    SubjectManagementComponent,
    UserManagementComponent,
    ProfileComponent,
    InscriptionsComponent,
    InscriptionCardComponent,
  ],
  imports: [
    CommonModule,
    CampusRoutingModule,
    ReactiveFormsModule,
    ...materialModules
  ],
})
export class CampusModule { }
