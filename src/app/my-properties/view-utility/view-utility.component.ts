import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-utility',
  templateUrl: './view-utility.component.html',
  styleUrls: ['./view-utility.component.css']
})
export class ViewUtilityComponent {

  constructor(private router: Router){

  }

  goBactToUtility(){
this.router.navigate(['/utilities'])
  }

}
