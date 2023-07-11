import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-property-update-popup',
  templateUrl: './property-update-popup.component.html',
  styleUrls: ['./property-update-popup.component.css']
})
export class PropertyUpdatePopupComponent {
  modalRef: NgbModalRef;
  @Input() property: any; // Input property object from the parent component
  form: FormGroup;
constructor(private formBuilder: FormBuilder){

}

ngOnInit() {
  this.form = this.formBuilder.group({
    propertyName: this.property.propertyName,
    propertyLocation: this.property.propertyLocation,
    selectProperty: this.property.selectProperty,
    propertyUnits: this.property.propertyUnits,
    propertyImage: this.property.propertyImage
  });
}

onPropertyUpdate(property){

}

closepopup(){
  this.modalRef.close();
}

}
