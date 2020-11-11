import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AppointmentService } from './../shared/appointment.service';
@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.page.html',
  styleUrls: ['./make-appointment.page.scss'],
})
export class MakeAppointmentPage implements OnInit {
  bookingForm: FormGroup;
  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      mobile: [''],
      dt: [''],
      note: ['']
    });
    this.aptService.getBookingList();
  
  }
  formSubmit() {
  
    if (!this.bookingForm.valid) {
      return false;
    } else {
      const res = this.aptService.createBooking(this.bookingForm.value);
      console.log(res)
      if(res) {
       
        this.bookingForm.reset()
        this.router.navigate(['/dashboard']);
      }
       
    }
   
  }
}
