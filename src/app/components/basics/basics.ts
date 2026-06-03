import { Component } from '@angular/core';
import { Calculatrice } from '../calculatrice/calculatrice';
import { Tva } from '../tva/tva';
import { Couleurs } from '../couleurs/couleurs';
import { FormsModule } from '@angular/forms';
import { Signals } from '../signals/signals';
import { ProduitsParent } from '../produits-parent/produits-parent';
import { OutputVote } from '../output-vote/output-vote';

@Component({
  selector: 'app-basics',
  imports: [FormsModule,
            Calculatrice,
            Tva,
            Couleurs,
            Signals,
            ProduitsParent,
            OutputVote],
  templateUrl: './basics.html',
  styleUrl: './basics.scss',
})
export class Basics {

  composants: string[] = ['Calculatrice',
                          'Couleurs',
                          'TVA',
                          'Signals',
                          'ProduitsParent',
                          'OutputVote'];
  composantSelectionne: string = this.composants[this.composants.length-1];
}
