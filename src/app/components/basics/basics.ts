import { Component } from '@angular/core';
import { Calculatrice } from '../calculatrice/calculatrice';
import { Tva } from '../tva/tva';
import { Couleurs } from '../couleurs/couleurs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basics',
  imports: [FormsModule,Calculatrice,Tva,Couleurs],
  templateUrl: './basics.html',
  styleUrl: './basics.scss',
})
export class Basics {

  composants: string[] = ['Calculatrice','Couleurs','TVA']
  composantSelectionne: string = this.composants[0];
}
