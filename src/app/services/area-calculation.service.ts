import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaCalculationService {
areaValueState = new BehaviorSubject<any>('');
areaValue = this.areaValueState.asObservable();
  constructor() { }


  calculateArea(coordinates: L.LatLng[]): number {
    if (!coordinates || coordinates.length < 3) {
        return 0;
    }
    
    if (!coordinates[0].equals(coordinates[coordinates.length - 1])) {
        coordinates.push(coordinates[0]);
    }
    
    let area = 0;
    for (let i = 0; i < coordinates.length - 1; i++) {
        area += (coordinates[i].lng * coordinates[i + 1].lat) - (coordinates[i + 1].lng * coordinates[i].lat);
    }
    
    return Math.abs(area / 2);
}

}
