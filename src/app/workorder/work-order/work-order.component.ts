import { Component, OnInit } from '@angular/core';
import { WorkOrderService } from '../service/workorder.service';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent implements OnInit {

  workOrders: any[];

  constructor(private workOrderService: WorkOrderService) {}

  ngOnInit(): void {
    this.loadWorkOrders();
  }

  loadWorkOrders(): void {
    this.workOrderService.getWorkOrders().subscribe((workOrders) => {
      this.workOrders = workOrders;
    });
  }

}
