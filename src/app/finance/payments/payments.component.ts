import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  constructor(private router: Router){

  }

  addPayments(){
    this.router.navigate(['/finance/leases'])
  }

  

}
