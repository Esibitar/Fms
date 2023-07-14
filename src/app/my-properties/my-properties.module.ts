import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import { AddPropertyComponent } from './add-property/add-property.component';



@NgModule({
  declarations: [
    PropertiesComponent,
    AddPropertyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyPropertiesModule { }
