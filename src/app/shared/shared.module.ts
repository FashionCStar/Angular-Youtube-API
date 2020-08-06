import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MostPopularComponent } from './helpers';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MostPopularComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    MostPopularComponent,
    CommonModule,
    HttpModule
  ]
})
export class SharedModule { }
