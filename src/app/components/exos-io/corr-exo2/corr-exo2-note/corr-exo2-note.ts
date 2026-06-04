import { Component, input } from '@angular/core';

@Component({
  selector: 'app-corr-exo2-note',
  imports: [],
  templateUrl: './corr-exo2-note.html',
  styleUrl: './corr-exo2-note.scss',
})
export class CorrExo2Note {

  note = input.required<number>();
  prenom = input.required<string>();

}
