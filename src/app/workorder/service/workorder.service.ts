import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkOrderService {
  // Placeholder data, replace with API calls
  private workOrders: any[] = [
    { id: 1, title: 'Install new equipment', status: 'Pending' },
    { id: 2, title: 'Routine maintenance', status: 'In Progress' },
    // Add more work orders as needed
  ];

  getWorkOrders(): Observable<any[]> {
    return of(this.workOrders);
  }

  // Add methods for creating, updating, and deleting work orders
}
