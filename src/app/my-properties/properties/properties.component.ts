import { PropertyServiceService } from './../property-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

properties: Property[] = [];
totalProperties: number = 0;

  constructor(private router: Router, private propertyService: PropertyServiceService){

  }

  ngOnInit(): void {
     this.fetchProperties();

  }

  addProperty(){
    this.router.navigate(['/add-property']);

  }

  addUnit(){
    this.router.navigate(['/add-unit']);
  }

  onpropertiesFetch(){
    this.fetchProperties();
  }

  private fetchProperties(){
    // this.isFetching = true;
    this.propertyService.getProperties().subscribe((property) => {
      this.totalProperties = Object.keys(property).length;
      this.properties = property;
      // this.isFetching = false;
    })
  }


}
