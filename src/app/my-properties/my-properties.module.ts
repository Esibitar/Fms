import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { MaintananceComponent } from './maintanance/maintanance.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { ViewUtilityComponent } from './view-utility/view-utility.component';
import { EditUtilitiesComponent } from './edit-utilities/edit-utilities.component';
import { PropertyUploadComponent } from './property-upload/property-upload.component';



@NgModule({
  declarations: [
    PropertiesComponent,
    AddPropertyComponent,
    AddUnitComponent,
    MaintananceComponent,
    UtilitiesComponent,
    ViewUtilityComponent,
    EditUtilitiesComponent,
    PropertyUploadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyPropertiesModule { }
