import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ep01-boutons',
  imports: [ButtonModule],
  templateUrl: './ep01-boutons.html',
  styleUrl: './ep01-boutons.scss',
})
export class Ep01Boutons {
  clic(label: string) {
    console.log('Clic sur :', label);
  }
}
