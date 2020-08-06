import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule, YoutubeService, RequestCore } from './shared';
import { HomeModule } from './home/home.module';
import { MaterialModule } from './shared/material';
import { ErrorModule } from './error/error.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HomeModule,
    ErrorModule,
    RouterModule.forRoot([], { useHash: true }),
    SharedModule
  ],
  providers: [
    YoutubeService,
    RequestCore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
