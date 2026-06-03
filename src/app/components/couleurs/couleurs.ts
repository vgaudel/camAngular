import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface couleurBilingue{
  fr : string;
  en : string;
}


@Component({
  selector: 'app-couleurs',
  imports: [FormsModule],
  templateUrl: './couleurs.html',
  styleUrl: './couleurs.scss',
})
export class Couleurs {

  listeCouleurs : couleurBilingue[] = [
    {fr : "bleue", en: "blue"},
    {fr : "rouge", en: "red"},
    {fr : "rose", en: "pink"}, 
    {fr : "vert", en: "green"},
    {fr : "jaune", en: "yellow"},
    ];
  couleurChoisie : string = "yellow";

  message : string = "quelques valeurs au carré";
  values :number[] = [1,2,4,10,25];

  nouvelleValeur : number=0;

  onAjoutNouvelleValeur(){
    this.values.push(this.nouvelleValeur);
  }

  onSupprimerLigne(index : number){
    this.values.splice(index,1);
  }

}
