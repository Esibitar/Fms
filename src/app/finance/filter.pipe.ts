import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(payments: any[], searchText: string): any[] {
    if (!payments || !searchText) {
      return payments;
    }

    searchText = searchText.toLowerCase();
    return payments.filter(payment => {
      // Implement your filtering logic here based on the 'searchText' and the properties of the 'payments' array
      // For example, you can check if the 'payment' object contains the 'searchText' in any of its properties.
      return payment.property.toLowerCase().includes(searchText) ||
             payment.unitId.toLowerCase().includes(searchText)
             // Add other properties that you want to filter by
             // ...
    });
  }
}
