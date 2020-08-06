import { NgModule } from '@angular/core';
import { ErrorComponent } from './error.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    RouterModule.forChild([{
      path: 'error',
      component: ErrorComponent
  }, {
      path: '**',
      redirectTo: '/error'
  }])
  ]
})
export class ErrorModule { }
