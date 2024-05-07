import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateInputDialogComponent } from './coordinate-input-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { ResultDisplayComponent } from '../result-display/result-display.component';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('CoordinateInputDialogComponent', () => {
  let component: CoordinateInputDialogComponent;
  let fixture: ComponentFixture<CoordinateInputDialogComponent>;
  let resultDisplayServiceSpy: jasmine.SpyObj<ResultDisplayComponent>;
  let mockDialogRef: Partial<MatDialogRef<CoordinateInputDialogComponent>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule,
        MatFormFieldModule  
      ],
      declarations: [CoordinateInputDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef }
      ] 
    });
    fixture = TestBed.createComponent(CoordinateInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog with coordinates when all latitude and longitude are provided', () => {
    const data = {
      latitude0: '10',
      longitude0: '20',
      latitude1: '30',
      longitude1: '40',
      latitude2: '50',
      longitude2: '60',
      latitude3: '70',
      longitude3: '80'
    };

    component.submit(data);

    expect(mockDialogRef.close).toHaveBeenCalledWith([
      [10, 20],
      [30, 40],
      [50, 60],
      [70, 80]
    ]);
  });

});
