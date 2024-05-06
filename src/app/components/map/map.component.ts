import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoordinateInputDialogComponent } from '../coordinate-input-dialog/coordinate-input-dialog.component';


declare const L: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  coords: any;
  latLong: any;
  mymap: any;
  coordinates: L.LatLng[] = [];
  public calculatedArea: any;

  constructor(private dialog: MatDialog){}
  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.coords = position.coords;
      this.latLong = [this.coords.latitude, this.coords.longitude];
      this.mymap = L.map('map').setView(this.latLong, 13);
      this.mymap.on('click', (event: any) => {
        console.log(event);
        this.callPopUp(event)
      });

      // L.tileLayer(
      //   'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
      //   {
      //     attribution:
      //       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      //     maxZoom: 18,
      //     id: 'mapbox/streets-v11',
      //     tileSize: 512,
      //     zoomOffset: -1,
      //     accessToken: 'your.mapbox.access.token',
      //   }
      // ).addTo(mymap);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.mymap);
      let marker = L.marker(this.latLong).addTo(this.mymap);

      marker.bindPopup('<b>Hi</b>').openPopup();

      let popup = L.popup()
        .setLatLng(this.latLong)
        .setContent('I am fateru victor')
        .openOn(this.mymap);
    });
    this.watchPosition();

  }
  callPopUp(e: any) {
    // var popup = L.popup();
    // popup.setLatLng(e.latlng)
    // .setContent("You clicked the map at " + e.latlng.toString())
    // .openOn(this.mymap);
    // const test = {[e.latlng.lat, e.latlng.lng]}
    let marker = null;
    // console.log(this.coordinateArray.length)

    marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.mymap)
    if (this.coordinates.length === 5) {
      this.mymap.removeLayer(marker);
      // this.calculatedArea = this.calculateArea(this.coordinates);
      console.log(this.calculateArea(this.coordinates))
    }
    else {
     this.addMarker(e.latlng); 
     this.coordinates.push(e.latlng);
     
      console.log(this.coordinates)

    }

  }

  addMarker(latlng: L.LatLng): void {
    L.marker(latlng).addTo(this.mymap);
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

  callCalculateAreaFunction(){
   this.calculatedArea =  this.calculateArea(this.coordinates);

  }

  calculateArea(coordinates: L.LatLng[]): number {
    // Ensure the polygon is closed
    if (!coordinates || coordinates.length < 3) {
        return 0; // Not enough coordinates to form a polygon
    }
    
    if (!coordinates[0].equals(coordinates[coordinates.length - 1])) {
        coordinates.push(coordinates[0]); // Make sure the polygon is closed
    }
    
    let area = 0;
    for (let i = 0; i < coordinates.length - 1; i++) {
        area += (coordinates[i].lng * coordinates[i + 1].lat) - (coordinates[i + 1].lng * coordinates[i].lat);
    }
    
    return Math.abs(area / 2);
}

ClearArea(){
  this.coordinates = [];
  this.calculatedArea = null;
  window.location.reload()
}

openCoordinateInputDialog() {
  const dialogRef = this.dialog.open(CoordinateInputDialogComponent, {
    minWidth: '550px',
      maxWidth: '600px',
      height: '80vh',
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Add marker or handle the entered coordinates here
      console.log('Entered coordinates:', result);
      const latLngs = result.map((coord: any[]) => L.latLng(coord[0], coord[1]));
      console.log(latLngs)
      this.calculatedArea = this.calculateArea(latLngs);
      console.log(this.calculatedArea)
      console.log(this.calculatedArea)
    }
  });
}



}
