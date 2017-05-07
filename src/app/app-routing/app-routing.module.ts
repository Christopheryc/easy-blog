import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import {PageComponent} from "../page/page.component";
import {LoginComponent} from "../login/login.component";
import {Page404Component} from "../page404/page404.component";
import {AppComponent} from "../app.component";
import {HomeComponent} from "../home/home.component";


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'page',
    component: PageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
