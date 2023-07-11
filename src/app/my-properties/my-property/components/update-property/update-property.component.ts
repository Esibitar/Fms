import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Property } from 'src/app/model/property';
import { MyPropertiesService } from '../../service/my-properties.service';
import { NgForm } from '@angular/forms';
import { PropertyUpdatePopupComponent } from '../property-update-popup/property-update-popup.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {

  allProperties: Property[] = [];
  isFetching: boolean = false;
  @ViewChild('formProperty') form: NgForm;
  modalRef: NgbModalRef;

  constructor(private mypropertyService: MyPropertiesService, private modalService: NgbModal){

  }

  ngOnInit(){
this.fetchProperties();
  }

  onpropertiesFetch(){
    this.fetchProperties();
  }

  private fetchProperties(){
    this.isFetching = true;
    this.mypropertyService.fetchProperties().subscribe((property) => {
      this.allProperties = property
      this.isFetching = false;
    })
  }

  onDeleteProperties(id: string){
 this.mypropertyService.onDeleteProperties(id);

}

onEditClicked(id: string){
  this.modalRef = this.modalService.open(PropertyUpdatePopupComponent)
  this.modalRef.componentInstance.id = id;
let currentProperty = this.allProperties.find((p) => {return p.id === id})
console.log(currentProperty);
this.modalRef.componentInstance.property = currentProperty;

}

}
