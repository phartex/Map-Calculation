import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as L from 'leaflet';
import { MapComponent } from './map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule
      ],
      declarations: [MapComponent]
    });
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should add marker to map and coordinates array if less than 5 coordinates', () => {
    const e = {
      latlng: { lat: 10, lng: 20 }
    };

    component.coordinates = [];

    component.callPopUp(e);

    expect(component.coordinates.length).toBe(1);
    expect(component.selectedMarkers.length).toBe(1);
  });

  it('should remove marker from map if 5 coordinates already present', () => {
    const e = {
      latlng: { lat: 10, lng: 20 }
    };



    spyOn(component.mymap, 'removeLayer');
    const coordintaes: any = [{ lat: 1, lng: 2 }, { lat: 2, lng: 3 }, { lat: 3, lng: 4 }, { lat: 4, lng: 5 }, { lat: 5, lng: 6 }];
    component.coordinates = coordintaes

    component.callPopUp(e);

    expect(component.mymap.removeLayer).toHaveBeenCalled();
  });
});
