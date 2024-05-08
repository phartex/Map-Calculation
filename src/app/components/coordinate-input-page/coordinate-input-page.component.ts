import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaCalculationService } from 'src/app/services/area-calculation.service';

declare const L: any;
@Component({
  selector: 'app-coordinate-input-page',
  templateUrl: './coordinate-input-page.component.html',
  styleUrls: ['./coordinate-input-page.component.scss']
})
export class CoordinateInputPageComponent {
  coordinateForm !: FormGroup
  public calculatedArea: any;
  constructor(private fb: FormBuilder, private areaCalculationService: AreaCalculationService, private router: Router) {
    this.coordinateForm = this.fb.group({
      bvn: ['', Validators.required],
      nin: ['', Validators.required],
    });
  }

  submit(data: any) {
    const coordinates = [];
    for (let i = 0; i < 4; i++) {
      if (data[`latitude${i}`] !== null && data[`longitude${i}`] !== null) {
        coordinates.push([parseFloat(data[`latitude${i}`]), parseFloat(data[`longitude${i}`])]);
      }
    }
    const latLngs = coordinates.map((coord: any[]) => L.latLng(coord[0], coord[1]));
    this.calculatedArea = this.areaCalculationService.calculateArea(latLngs);
    this.areaCalculationService.areaValueState.next(this.calculatedArea);

    let myNumber = this.calculatedArea;
    localStorage.setItem('area', myNumber);
    this.router.navigate(['/home']);

  }

}
