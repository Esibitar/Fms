import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css']
})
export class AddTenantComponent {

  constructor(private router: Router){

  }

goBactToTenant() {
this.router.navigate(['/tenants'])
}


}
