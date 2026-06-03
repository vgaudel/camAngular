import { Component, input } from '@angular/core';
import { IProduit } from '../../../model/IProduit';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-produit-enfant',
  imports: [CurrencyPipe,TitleCasePipe],
  templateUrl: './produit-enfant.html',
  styleUrl: './produit-enfant.scss',
})
export class ProduitEnfant {

  // avec le .required, le input devient obligatoire 
  // -> Le parent DOIT fournir cette valeur
  produit = input.required<IProduit>();

}
