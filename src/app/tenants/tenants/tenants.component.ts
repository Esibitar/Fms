import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent {

  constructor(private router: Router){

  }

  addTenant(){
    this.router.navigate(['/add-tenant']);
  }

}
