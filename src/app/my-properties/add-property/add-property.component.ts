import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyServiceService } from '../property-service.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  formGroup: FormGroup;
  showPaybillInput: boolean = false;
  showTillNumberInputs: boolean = false;

  constructor(private router: Router, private propertyService: PropertyServiceService){

  }

  ngOnInit(): void {
      this.initForm();
  }


  initForm(){
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      units: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required)
  })
}

goBactToTenant() {
this.router.navigate(['/properties'])
}

togglePaymentMethod(method: string) {
  this.showPaybillInput = method === 'paybill';
  this.showTillNumberInputs = method === 'tillNumber';
}


addProperty(){
this.propertyService.addproperty(this.formGroup.value);
}

}
