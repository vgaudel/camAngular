import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tva',
  imports: [],
  templateUrl: './tva.html',
  styleUrl: './tva.scss',
})
export class Tva {

  count = 10;
  count2 = signal(10);

constructor(){
  setTimeout(() => this.count = 50,3000);
  setTimeout(() => this.count2.set(50),5000);
}

}
