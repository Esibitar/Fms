import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent {
  formItems: any[] = [];

  constructor(private router: Router){

  }


  ngOnInit() {
    this.addFormItem();
  }

  addFormItem() {
    this.formItems.push({});
  }

  goBactToTenant() {
    this.router.navigate(['/properties'])
    }

}
