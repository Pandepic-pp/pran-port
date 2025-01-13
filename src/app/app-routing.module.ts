import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { JourneyComponent } from './components/journey/journey.component';
import { ErrorComponent } from './components/error/error.component';
import { AccomplishmentsComponent } from './components/accomplishments/accomplishments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'journey',
    component: JourneyComponent
  },
  {
    path: 'accomplishments',
    component: AccomplishmentsComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
