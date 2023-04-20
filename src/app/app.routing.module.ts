import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},


{
  path: 'home',
  component: HomeComponent,
  children: []
}

  
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes, { useHash: true } ) 
],
exports: [ RouterModule ]
})
export class AppRoutingModule { }