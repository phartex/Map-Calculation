import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './common/material-ui/material-ui.module';
import { CoordinateInputDialogComponent } from './components/coordinate-input-dialog/coordinate-input-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoordinateInputPageComponent } from './components/coordinate-input-page/coordinate-input-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ResultDisplayComponent,
    CoordinateInputDialogComponent,
    CoordinateInputPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
