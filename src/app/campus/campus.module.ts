import { NgModule } from '@angular/core';

import { CampusRoutingModule } from './campus-routing.module';
import { CampusComponent } from './campus.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { SubjectManagementComponent } from './layouts/subject-management/subject-management.component';
import { UserManagementComponent } from './layouts/user-management/user-management.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { InscriptionsComponent } from './layouts/inscriptions/inscriptions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionCardComponent } from './components/inscription-card/inscription-card.component';
import { DialogCreateEditUserComponent } from './components/dialog-create-edit-user/dialog-create-edit-user.component';
import { DialogAddInscriptionToUserComponent } from './components/dialog-add-inscription-to-user/dialog-add-inscription-to-user.component';

const materialModules = [ MatIconModule, MatMenuModule ];

@NgModule({
  declarations: [
    CampusComponent,
    SidebarComponent,
    SubjectManagementComponent,
    UserManagementComponent,
    ProfileComponent,
    InscriptionsComponent,
    InscriptionCardComponent,
    DialogCreateEditUserComponent,
    DialogAddInscriptionToUserComponent,
  ],
  imports: [
    CommonModule,
    CampusRoutingModule,
    ReactiveFormsModule,
    ...materialModules
  ],
})
export class CampusModule { }
