
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { TenantsModule } from './tenants/tenants.module';
import { UnitsModule } from './units/units.module';
import { MyPropertiesModule } from './my-properties/my-properties.module';
import { FinanceModule } from './finance/finance.module';
import { AuthModule } from './auth/auth.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkOrderComponent } from './workorder/work-order/work-order.component';
import { DispatcherScheduleComponent } from './dispatcher/dispatcher-schedule/dispatcher-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    WorkOrderComponent,
    DispatcherScheduleComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TenantsModule,
    UnitsModule,
    MyPropertiesModule,
    FinanceModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
