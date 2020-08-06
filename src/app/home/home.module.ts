import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: HomeComponent
    }]),
    SharedModule
  ]
})
export class HomeModule { }
