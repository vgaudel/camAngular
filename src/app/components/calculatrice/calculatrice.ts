import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculatrice',
  imports: [FormsModule],
  templateUrl: './calculatrice.html',
  styleUrl: './calculatrice.scss',
})
export class Calculatrice {

  versionCalculette : string = "0.0.1";
  a : number = 0;
  b : number = 0;
  resultat : number = 0;

  //On souhaite ajouter un historique des calculs
  historiqueCalculs: string[]=[];
  montrerHistorique : boolean = true;

  //Attributs pour pister la position de la souris sur un élément HTML donné
  x: number = 0;
  y: number = 0;

  onCalculer(operateur: string):void{
    switch(operateur){
      case '+':
        this.resultat=this.a+this.b;
        break;
      case '-':
        this.resultat=this.a-this.b;
        break;
      case '*':
        this.resultat=this.a*this.b;
        break;
      case '/':
        this.resultat=this.a/this.b;
        break;
      default :
      this.resultat = 0;
    }
    this.historiqueCalculs.push(`${this.a} ${operateur} ${this.b} = ${this.resultat}`);
  }

  clickFromUser(){
    console.log("L'utilisateur vient de cliquer sur le bouton avec la valeur " + this.a);
  }
   
  onMouseMove(evt: MouseEvent){
    let currentDiv : HTMLElement = <HTMLElement> evt.target;
    this.x = evt.x - currentDiv.offsetLeft;
    this.y = evt.y - currentDiv.offsetTop;
  }
  onMouseLeave(){
    this.x = 0;
    this.y = 0;
  }
}
