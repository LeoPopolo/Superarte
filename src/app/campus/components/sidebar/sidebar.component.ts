import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() items: SidebarItem[] = [];

  constructor(
    private router: Router
  ) {}

  logout() {
    if (confirm('Desea cerrar sesión?')) {
      localStorage.clear();
      this.router.navigate(['/web']);
    }
  }
}

export interface SidebarItem {
  icon: string;
  label: string;
  disabled: boolean;
  path: string;
}
