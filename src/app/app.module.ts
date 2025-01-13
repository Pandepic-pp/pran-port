import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { JourneyComponent } from './components/journey/journey.component';
import { ErrorComponent } from './components/error/error.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    JourneyComponent,
    ErrorComponent,
    AccomplishmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
