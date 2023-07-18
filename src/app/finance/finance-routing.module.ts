import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { FinanceComponent } from './finance.component';
import { LeasesComponent } from './leases/leases.component';

const routes: Routes = [
  {path: '', component: FinanceComponent,
   children: [
    { path: '', redirectTo: 'payments', pathMatch: 'full' },
    {path: 'payments', component: PaymentsComponent},
    {path: 'leases', component: LeasesComponent}
   ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
