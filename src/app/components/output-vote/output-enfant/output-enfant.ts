import { Component, output } from '@angular/core';

@Component({
  selector: 'app-output-enfant',
  imports: [],
  templateUrl: './output-enfant.html',
  styleUrl: './output-enfant.scss',
})
export class OutputEnfant {
    // -------------------------------------------------------
  // output() — Émet un événement VERS le parent
  // -------------------------------------------------------

  // output<string>() crée un OutputEmitterRef qui émet des valeurs de type string.
  // Le parent écoute cet événement avec (aVote)="maMethode($event)"
  
  aVote=output<string>();

  voter(choix: string) {
    // .emit() envoie la valeur au parent
    this.aVote.emit(choix);
  }
}
