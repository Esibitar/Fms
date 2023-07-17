import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-units',
  templateUrl: './available-units.component.html',
  styleUrls: ['./available-units.component.css']
})
export class AvailableUnitsComponent {
  constructor(private router: Router){

  }

  addUnit(){
    this.router.navigate(['/add-unit']);
  }

}
