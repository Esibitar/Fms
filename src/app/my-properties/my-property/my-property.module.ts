import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePropertyComponent } from './components/update-property/update-property.component';
import { MyPropertyComponent } from './components/my-properties/my-property.component';
import { FormsModule } from '@angular/forms';
import { PropertyUpdatePopupComponent } from './components/property-update-popup/property-update-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    MyPropertyComponent,
    UpdatePropertyComponent,
    PropertyUpdatePopupComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class MyPropertyModule { }
