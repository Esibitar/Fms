import { NgForm } from '@angular/forms';
import { MyPropertiesService } from '../../service/my-properties.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-property',
  templateUrl: './my-property.component.html',
  styleUrls: ['./my-property.component.css']
})
export class MyPropertyComponent {

  @ViewChild('formProperty') formProperty: NgForm;
  showSuccessMessage: boolean = false;

  constructor(private propertiesService: MyPropertiesService) { }

  onPropertyCreated(property: {propertyName: string, propertyLocation: string, selectProperty: string, propertyUnits: any, propertyImage: File}){
    this.propertiesService.onPropertyCreated(property);
}


}
