import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('reportsCharts') lineChartRef: ElementRef;
  reportsCharts: any;
  propertiesData: any;
  totalProperties: number = 0;

  constructor(private elementRef: ElementRef, private http: HttpClient) { }

  ngOnInit(): void {

    this.fetchProperties();

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  fetchProperties(){
    this.http.get('https://nyumbapay-663d7-default-rtdb.firebaseio.com/property.json')
    .subscribe((res) => {
      this.totalProperties = Object.keys(res).length;
      this.propertiesData = res;
      this.createReportsCharts();
    });
  }

  createReportsCharts(): void {
    const ctx = this.lineChartRef.nativeElement.getContext('2d');
    const propertyNames = Object.keys(this.propertiesData);
    const propertyCounts = propertyNames.map((propertyName) => this.propertiesData[propertyName].count);

    this.reportsCharts = new Chart(ctx, {
      type: 'line',
      data: {
        labels: propertyNames,
        datasets: [{
          label: 'Properties',
          data: propertyCounts,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }




}
