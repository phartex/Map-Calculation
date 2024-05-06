import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';
import { Map2Component } from './components/map2/map2.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/dd', pathMatch: 'full'
  },
  {
    path:'home',
    component: MapComponent
  },
  {
    path:'result-display',
    component: ResultDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
