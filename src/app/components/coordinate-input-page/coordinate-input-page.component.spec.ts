import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateInputPageComponent } from './coordinate-input-page.component';

describe('CoordinateInputPageComponent', () => {
  let component: CoordinateInputPageComponent;
  let fixture: ComponentFixture<CoordinateInputPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinateInputPageComponent]
    });
    fixture = TestBed.createComponent(CoordinateInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
