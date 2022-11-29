import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {ServerListComponent} from "./pages/server-list/server-list.component";

const routes: Routes = [
  {
    path: 'home', component: HomepageComponent
  },
  {
    path: 'monitoring', component: ServerListComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch:'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
