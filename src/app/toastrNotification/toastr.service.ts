import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrNotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message){
    this.toastr.success(message, 'Success', { timeOut: 3000 });
  }

  // showError(message, title){
  //     this.toastr.error(message, title)
  // }

  // showInfo(message, title){
  //     this.toastr.info(message, title)
  }

