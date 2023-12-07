import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web/web.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'web',
    component: WebComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'campus',
    loadChildren: () => import('./campus/campus.module')
      .then(m => m.CampusModule)
  },
  {
    path: '',
    redirectTo: 'web',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
