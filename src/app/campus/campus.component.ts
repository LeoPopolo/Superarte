import { Component, OnInit } from '@angular/core';
import { SidebarItem } from './components/sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.scss']
})
export class CampusComponent implements OnInit {

  userData: any = JSON.parse(localStorage.getItem('userData')!);
  sidebarItems: SidebarItem[] = [];

  constructor() {
    if (this.userData.type === 'admin') {
      this.sidebarItems = [
        {
          icon: 'group',
          label: 'Gestión de usuarios',
          disabled: false,
          path: 'user-management'
        },
        {
          icon: 'auto_stories',
          label: 'Gestión de materias',
          disabled: false,
          path: 'subject-management'
      }];

    } else if (this.userData.type === 'pupil') {
      this.sidebarItems = [
        {
          icon: 'person',
          label: 'Mi perfil',
          disabled: false,
          path: 'profile'
        },
        {
          icon: 'auto_stories',
          label: 'Mis materias',
          disabled: false,
          path: 'inscriptions'
      }];

    }
  }

  ngOnInit(): void {
  }

}
