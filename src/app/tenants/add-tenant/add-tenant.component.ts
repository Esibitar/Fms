import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TenantService } from '../Service/tenant.service';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css']
})
export class AddTenantComponent {
  formGroup: FormGroup;
  username: any;
  password: any;
  access_token: string;


  constructor(private router: Router, private tenantService: TenantService, private authService: AuthService) {
    this.access_token = this.authService.getAccessToken();
   }


  tenant: { username: string, password: string } = { username: '', password: '' };



  addTenant() {
    this.tenantService.addTenant(this.tenant).subscribe(
      response => {
        // Handle the success response here (e.g., show a success message)
        console.log('Tenant added successfully:', response);
        this.resetForm();
      },
      error => {
        // Handle errors here (e.g., show an error message)
        console.error('Error adding tenant:', error);
      }
    );
  }

  private resetForm() {
    this.tenant.username = '';
    this.tenant.password = '';
  }


goBactToTenant() {
this.router.navigate(['/tenants'])
}


}
