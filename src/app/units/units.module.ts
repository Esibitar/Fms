import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableUnitsComponent } from './available-units/available-units.component';
import { AddUnitComponent } from './add-unit/add-unit.component';



@NgModule({
  declarations: [
    AvailableUnitsComponent,
    AddUnitComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UnitsModule { }
