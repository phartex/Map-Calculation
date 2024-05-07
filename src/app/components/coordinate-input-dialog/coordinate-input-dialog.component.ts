import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-coordinate-input-dialog',
  templateUrl: './coordinate-input-dialog.component.html',
  styleUrls: ['./coordinate-input-dialog.component.scss']
})
export class CoordinateInputDialogComponent {
  coordinateForm !: FormGroup

  constructor(private location: Location,private fb: FormBuilder,private dialogRef: MatDialogRef<CoordinateInputDialogComponent>) {
    this.coordinateForm = this.fb.group({
      bvn: ['', Validators.required],
      nin: ['', Validators.required],
    });
  }

  submitCoordinate(){

  }
  submit(data: any) {
    // Prepare the coordinates array
    const coordinates = [];
    for (let i = 0; i < 4; i++) {
      if (data[`latitude${i}`] !== null && data[`longitude${i}`] !== null) {
        coordinates.push([parseFloat(data[`latitude${i}`]), parseFloat(data[`longitude${i}`])]);
      }
    }
    // Close the dialog and pass the coordinates
    this.dialogRef.close(coordinates);
  }

}
