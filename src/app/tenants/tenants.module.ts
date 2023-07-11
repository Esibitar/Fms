import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantDataComponent } from './tenant-data/tenant-data.component';
import { ViewDataComponent } from './view-data/view-data.component';



@NgModule({
  declarations: [
    TenantDataComponent,
    ViewDataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TenantsModule { }
