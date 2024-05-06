import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateInputDialogComponent } from './coordinate-input-dialog.component';

describe('CoordinateInputDialogComponent', () => {
  let component: CoordinateInputDialogComponent;
  let fixture: ComponentFixture<CoordinateInputDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinateInputDialogComponent]
    });
    fixture = TestBed.createComponent(CoordinateInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
