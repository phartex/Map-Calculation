import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';
import { CoordinateInputPageComponent } from './components/coordinate-input-page/coordinate-input-page.component';
import { mapPointGuard } from './guard/map-point.guard';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:'home',
    component: MapComponent
  },
  {
    path:'form-input',
    component: CoordinateInputPageComponent,
    canActivate:[mapPointGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
