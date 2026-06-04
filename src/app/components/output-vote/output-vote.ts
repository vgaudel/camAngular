import { Component } from '@angular/core';
import { OutputEnfant } from "./output-enfant/output-enfant";

@Component({
  selector: 'app-output-vote',
  imports: [OutputEnfant],
  templateUrl: './output-vote.html',
  styleUrl: './output-vote.scss',
})
export class OutputVote {

  // le parent comptabilise les votes reçus depuis l'enfant
  pour: number = 0;
  contre: number = 0;
  abstention: number = 0;

  get total() { return this.pour + this.contre + this.abstention;}

  // méthode appelée lorsque l'enfant a voté
  onVoteRecu(choix: string){
    if (choix === "pour") this.pour++;
    else if (choix === "contre") this.contre++;
    else this.abstention++; 
  }

}
