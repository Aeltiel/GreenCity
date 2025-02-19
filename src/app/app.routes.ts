import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { GreenSpaceDetailComponent } from './Pages/green-space-detail/green-space-detail.component';
import { SpaceFormComponent } from './Pages/space-form/space-form.component';
import { GreenSpacesPagesComponent } from './Pages/green-spaces-pages/green-spaces-pages.component';
import { PlantePageComponent } from './Pages/plante-page/plante-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'space/:id', component: GreenSpaceDetailComponent },
  { path: 'space/:id/plante/:id', component: PlantePageComponent },
  { path: 'spaceForm', component: SpaceFormComponent },
  { path: 'green-spaces', component: GreenSpacesPagesComponent}
];
