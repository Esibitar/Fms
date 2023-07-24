import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {
  searchText: any;
  payments = [
    {date: 12/7/2023,	property: 'Utumishi',	unit_Id: 'b56',	Receipt_No: 'rct-98', status: 'cleared'},
    {date: 12/7/2023,	property: 'Liberty',	unit_Id: 'b54',	Receipt_No: 'rct-981', status: 'cleared'},
    {date: 12/7/2023,	property: 'Pipeline',	unit_Id: 'b5689',	Receipt_No: 'rct-982', status: 'cleared'},
    {date: 12/7/2023,	property: 'Kangundu',	unit_Id: 'b596',	Receipt_No: 'rct-928', status: 'cleared'},
    {date: 12/7/2023,	property: 'Las vegas',	unit_Id: 'b756',	Receipt_No: 'rct-198', status: 'cleared'},
    {date: 12/7/2023,	property: 'Eazzy-place',	unit_Id: 'b056',	Receipt_No: 'rct-398', status: 'cleared'},
    {date: 12/7/2023,	property: 'Sunrise',	unit_Id: 'b7856',	Receipt_No: 'rct-498', status: 'cleared'},

  ];
  constructor(private router: Router){

  }

  addPayments(){
    this.router.navigate(['/finance/leases'])
  }



}
