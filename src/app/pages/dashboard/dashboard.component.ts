import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyServiceService } from 'src/app/my-properties/property-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalProperties: number = 0;
  properties: any;

  @ViewChild('reportsCharts') lineChartRef: ElementRef;
 constructor(private elementRef: ElementRef, private router: Router, private propertyService: PropertyServiceService) { }

  ngOnInit(): void {
    const data = sessionStorage.getItem('data');
    if(data!==null){
    const sessionObject = JSON.parse(data);
    const sessionToken = sessionObject.acess_token;
    if(sessionToken === null)
    {
      this.router.navigate(['/login'])
    }

  }else{
    this.router.navigate(['/login'])
  }

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);


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
