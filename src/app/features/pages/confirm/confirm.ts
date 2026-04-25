import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirm',
  imports: [RouterLink],
  templateUrl: './confirm.html',
  styleUrl: './confirm.css',
})
export class Confirm {
  orderNumber = Math.floor(Math.random() * 900000 + 100000);
}
