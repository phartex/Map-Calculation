import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn } from '@angular/router';
import { AreaCalculationService } from '../services/area-calculation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationsService } from '../services/notifications.service';


@Injectable({
  providedIn:'root'
})

export class mapPointGuard implements CanActivate{

  constructor(private areaService: AreaCalculationService, private snackBar : MatSnackBar,
    private notify : NotificationsService){}
  canActivate(): boolean {
    let canActivate = false;

    // Subscribe to the mapGuardState BehaviorSubject
    this.areaService.mapGuardState.subscribe((value: boolean) => {
      // Update the canActivate flag based on the value of the BehaviorSubject
      canActivate = value;
    });

    // Check if canActivate is true and return the result
    if (canActivate) {
      return true; // Allow navigation if mapGuardState is true
    } else {
      // Redirect to another route or show an error message
      // alert("please");
      // this.notify.publishMessages('Please select an initial point to access this page', 'danger', 1);
      this.snackBar.open(
        'Please select a point to have acess to the input field',
        'Error',
        {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: ['error-snackBar'],
        }
      );
      return false; // Prevent navigation
    }
  }
}


