import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { LeasesComponent } from './leases/leases.component';
import { FinanceComponent } from './finance.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    PaymentsComponent,
    LeasesComponent,
    FinanceComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    RouterModule,
    FormsModule,
    
  ]
})
export class FinanceModule { }
