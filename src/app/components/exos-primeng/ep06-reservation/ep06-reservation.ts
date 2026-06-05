import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-ep06-reservation',
  imports: [FormsModule, DatePipe, DatePickerModule],
  templateUrl: './ep06-reservation.html',
  styleUrl: './ep06-reservation.scss',
})
export class Ep06Reservation {
  aujourdhui = new Date();
  dateRdv: Date | null = null;
}
