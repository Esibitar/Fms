import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent {
  Tenants = [
    {name: '12/7/2023',	property: 'Utumishi',	unit: 'b56',	 status: 'cleared'},
    {name: 12/7/2023,	property: 'Liberty',	unit: 'b54',	status: 'cleared'},
    {name: 12/7/2023,	property: 'Pipeline',	unit: 'b5689', status: 'cleared'},
    {name: 12/7/2023,	property: 'Kangundu',	unit: 'b596', status: 'cleared'},
    {name: 12/7/2023,	property: 'Las vegas',	unit: 'b756', status: 'cleared'},
    {name: 12/7/2023,	property: 'Eazzy-place',	unit: 'b056', status: 'cleared'},
    {name: 12/7/2023,	property: 'Sunrise',	unit: 'b7856', status: 'cleared'},
    {name: '12/7/2023',	property: 'Utumishi',	unit: 'b56',	 status: 'active'},
    {name: '12/7/2023',	property: 'Utumishi',	unit: 'b56',	 status: 'cleared'},
    {name: '12/7/2023',	property: 'Utumishi',	unit: 'b56',	 status: 'cleared'},
    {name: '12/7/2023',	property: 'Utumishi',	unit: 'b56',	 status: 'cleared'},
    {name: '12/7/2023',	property: 'Utumishi',	unit: 'b56',	 status: 'cleared'},
    {name: '12/7/2023',	property: 'Utumishi',	unit: 'b56',	 status: 'cleared'},

    {name: '12/7/2023',	property: 'Utumishi',	unit: 'b56',	 status: 'cleared'},
    

  ];

  constructor(private router: Router){

  }

  addTenant(){
    this.router.navigate(['/add-tenant']);
  }

}
