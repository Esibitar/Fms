import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { LeasesComponent } from './leases/leases.component';
import { FinanceComponent } from './finance.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PaymentsComponent,
    LeasesComponent,
    FinanceComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    RouterModule
  ]
})
export class FinanceModule { }
