import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantDataComponent } from './tenant-data/tenant-data.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { TenantsComponent } from './tenants/tenants.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { AddTenantComponent } from './add-tenant/add-tenant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TenantDataComponent,
    ViewDataComponent,
    TenantsComponent,
    AddInvoiceComponent,
    AddTenantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ]
})
export class TenantsModule { }
