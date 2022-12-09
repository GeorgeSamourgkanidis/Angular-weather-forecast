import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  // open successful swal
  openSuccessSwal(message: string) {
    swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: true,
      timer: 3000
    });
  }

  // open warning swal
  openWarningSwal(message: string) {
    swal.fire({
      icon: 'warning',
      title: message,
      showConfirmButton: true
    });
  }

  // open error swal
  openErrorSwal(message: string) {
    swal.fire({
      icon: 'error',
      title: message,
      showConfirmButton: true
    });
  }
}
