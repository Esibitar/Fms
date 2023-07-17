import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  showPaybillInput: boolean = false;
  showTillNumberInputs: boolean = false;

  constructor(private router: Router){

  }

goBactToTenant() {
this.router.navigate(['/properties'])
}

togglePaymentMethod(method: string) {
  this.showPaybillInput = method === 'paybill';
  this.showTillNumberInputs = method === 'tillNumber';
}


}
