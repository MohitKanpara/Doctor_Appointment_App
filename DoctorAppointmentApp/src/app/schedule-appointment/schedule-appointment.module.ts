import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleAppointmentPageRoutingModule } from './schedule-appointment-routing.module';

import { ScheduleAppointmentPage } from './schedule-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ScheduleAppointmentPageRoutingModule
  ],
  declarations: [ScheduleAppointmentPage]
})
export class ScheduleAppointmentPageModule {}
