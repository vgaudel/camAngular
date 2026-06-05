import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ep03-prix',
  imports: [FormsModule, InputNumberModule, ButtonModule],
  templateUrl: './ep03-prix.html',
  styleUrl: './ep03-prix.scss',
})
export class Ep03Prix {
  prix = 49.9;

  ajouter() { this.prix += 10; }
  retirer() { this.prix = Math.max(0, this.prix - 10); }
}
