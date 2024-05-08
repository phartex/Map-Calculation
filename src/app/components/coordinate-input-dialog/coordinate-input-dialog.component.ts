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

  constructor(private fb: FormBuilder,private dialogRef: MatDialogRef<CoordinateInputDialogComponent>) {
    this.coordinateForm = this.fb.group({
      bvn: ['', Validators.required],
      nin: ['', Validators.required],
    });
  }

  submitCoordinate(){

  }
  submit(data: any) {
    const coordinates = [];
    for (let i = 0; i < 4; i++) {
      if (data[`latitude${i}`] !== null && data[`longitude${i}`] !== null) {
        coordinates.push([parseFloat(data[`latitude${i}`]), parseFloat(data[`longitude${i}`])]);
      }
    }
    this.dialogRef.close(coordinates);
  }




// declare const L: any;
// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.scss']
// })
// export class MapComponent implements OnInit, OnDestroy {
//   coords: any;
//   latLong: any;
//   mymap: any;
//   coordinates: L.LatLng[] = [];
//   public calculatedArea: any;
//   selectedMarkers: L.LatLng[] = [];
//   storedArea: any
//   retrievedNumber: any;

//   constructor(private dialog: MatDialog, private location: Location,
//     public areaCalculation: AreaCalculationService, private router: Router) { }


//   ngOnInit() {

//     this.storedArea = localStorage.getItem('area');
//     this.retrievedNumber = parseFloat(this.storedArea);
//     if (!navigator.geolocation) {
//       console.log('location is not supported');
//     }
//     navigator.geolocation.getCurrentPosition((position) => {
//       this.coords = position.coords;
//       this.latLong = [this.coords.latitude, this.coords.longitude];
//       this.mymap = L.map('map').setView(this.latLong, 13);
//       this.mymap.on('click', (event: any) => {
//         console.log(event);
//         this.callPopUp(event)
//       });



//       L.tileLayer(
//         'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVhdXRpcGh1bG1pbmQiLCJhIjoiY2x2dmwwNjJ2MDJ6YTJxbXQ0N29qbGprdyJ9.goq4t5ABrFBmbjMVZV-v3w',
//         {
//           attribution:
//             'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//           maxZoom: 18,
//           id: 'mapbox/streets-v11',
//           tileSize: 512,
//           zoomOffset: -1,
//           accessToken: 'pk.eyJ1IjoiYmVhdXRpcGh1bG1pbmQiLCJhIjoiY2x2dmwwNjJ2MDJ6YTJxbXQ0N29qbGprdyJ9.goq4t5ABrFBmbjMVZV-v3w',
//         }
//       ).addTo(this.mymap);


//       let marker = L.marker(this.latLong).addTo(this.mymap);

//       marker.bindPopup('<b>Hi</b>').openPopup();

//       let popup = L.popup()
//         .setLatLng(this.latLong)
//         .setContent('I am fateru victor')
//         .openOn(this.mymap);
//     });
//     this.watchPosition();

//   }
//   callPopUp(e: any) {

//     let marker = null;

//     marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.mymap)
//     if (this.coordinates.length === 5) {
//       this.mymap.removeLayer(marker);
//     }
//     else {
//       this.addMarker(e.latlng);
//       this.coordinates.push(e.latlng);
//       this.selectedMarkers.push(marker);
//       console.log(this.coordinates)
//     }

//   }

//   addMarker(latlng: L.LatLng): void {
//     L.marker(latlng).addTo(this.mymap);
//   }

//   watchPosition() {
//     let desLat = 0;
//     let desLon = 0;
//     let id = navigator.geolocation.watchPosition(
//       (position) => {
//         console.log(
//           `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
//         );
//         if (position.coords.latitude === desLat) {
//           navigator.geolocation.clearWatch(id);
//         }
//       },
//       (err) => {
//         console.log(err);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 0,
//       }
//     );
//   }

//   callCalculateAreaFunction() {
//     this.calculatedArea = this.areaCalculation.calculateArea(this.coordinates);

//   }

//   calculateArea(coordinates: L.LatLng[]): number {
//     if (!coordinates || coordinates.length < 3) {
//       return 0;
//     }

//     if (!coordinates[0].equals(coordinates[coordinates.length - 1])) {
//       coordinates.push(coordinates[0]);
//     }

//     let area = 0;
//     for (let i = 0; i < coordinates.length - 1; i++) {
//       area += (coordinates[i].lng * coordinates[i + 1].lat) - (coordinates[i + 1].lng * coordinates[i].lat);
//     }

//     return Math.abs(area / 2);
//   }

//   ClearArea() {
//     this.coordinates = [];
//     this.calculatedArea = null;


//   }

//   removeSelectedMarkers() {
//     this.router.navigate([this.router.url])
//   }

}
