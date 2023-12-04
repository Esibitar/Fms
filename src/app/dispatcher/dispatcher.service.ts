import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DispatchService {
  // Placeholder data, replace with API calls
  private technicians: any[] = [
    { id: 1, name: 'Technician 1', status: 'Available' },
    { id: 2, name: 'Technician 2', status: 'Available' },
    // Add more technicians as needed
  ];

  getTechnicians(): Observable<any[]> {
    return of(this.technicians);
  }

  // Add methods for dispatching and scheduling
}
