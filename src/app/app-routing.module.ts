import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { LoginComponent } from './auth/components/login/login.component';
import { TenantDataComponent } from './tenants/tenant-data/tenant-data.component';
import { ViewDataComponent } from './tenants/view-data/view-data.component';
import { AvailableUnitsComponent } from './units/available-units/available-units.component';
import { TenantsComponent } from './tenants/tenants/tenants.component';
import { AddInvoiceComponent } from './tenants/add-invoice/add-invoice.component';
import { AddTenantComponent } from './tenants/add-tenant/add-tenant.component';
import { PropertiesComponent } from './my-properties/properties/properties.component';
import { AddPropertyComponent } from './my-properties/add-property/add-property.component';
import { AddUnitComponent } from './my-properties/add-unit/add-unit.component';
import { MaintananceComponent } from './my-properties/maintanance/maintanance.component';
import { UtilitiesComponent } from './my-properties/utilities/utilities.component';
import { ViewUtilityComponent } from './my-properties/view-utility/view-utility.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';

const routes: Routes = [

  // { path: '', component: LoginComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'tenant-data', component: TenantDataComponent},
  { path: 'view-data', component: ViewDataComponent },

  { path: 'available-units', component: AvailableUnitsComponent },

  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  { path: 'tenants', component: TenantsComponent},
  { path: 'add-invoice', component: AddInvoiceComponent},
  { path: 'add-tenant', component: AddTenantComponent},
  { path: 'properties', component: PropertiesComponent},
  { path: 'add-property', component: AddPropertyComponent},
  { path: 'add-unit', component: AddUnitComponent},
  { path: 'maintanance', component: MaintananceComponent},
  { path: 'utilities', component: UtilitiesComponent},
  { path: 'view-utilities', component: ViewUtilityComponent},
  { path: 'sign-up', component: SignUpComponent},
  {
    path: 'finance',
    loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
