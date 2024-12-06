import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { GreenSpaceDetailComponent } from './Pages/green-space-detail/green-space-detail.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'space/:id', component: GreenSpaceDetailComponent },
];
