import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddUnitComponent } from './add-unit/add-unit.component';



@NgModule({
  declarations: [
    PropertiesComponent,
    AddPropertyComponent,
    AddUnitComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyPropertiesModule { }
