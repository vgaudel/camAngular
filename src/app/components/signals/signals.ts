import { Component,signal, WritableSignal, computed } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {

  count1: number = 10;
  count2: WritableSignal<number> = signal(10);

  prixHT = signal(100);
  tva = signal(20);

  prixTTC = computed(() => this.prixHT() * (1 + this.tva()/100));

  constructor(){
    setTimeout(()=>this.count1 = 30,5000);
    setTimeout(()=>this.count2.set(122),3000);
    setTimeout(()=>this.tva.set(10),5000);
    setTimeout(()=>this.prixHT.set(120),3000);
  }

}
