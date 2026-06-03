import { Component } from '@angular/core';
import { IProduit } from '../../model/IProduit';
import { ProduitEnfant } from './produit-enfant/produit-enfant';

@Component({
  selector: 'app-produits-parent',
  imports: [ProduitEnfant],
  templateUrl: './produits-parent.html',
  styleUrl: './produits-parent.scss',
})
export class ProduitsParent {

// Le PARENT possède les données et les transmet à l'ENFANT via [input]
  produits: IProduit[] = [
    { ref: 'p1', label: 'iPhone 16', prix: 999, categorie: 'smartphone' },
    { ref: 'p2', label: 'MacBook Air M4', prix: 1299, categorie: 'laptop' },
    { ref: 'p3', label: 'AirPods Pro 3', prix: 279, categorie: 'accessoire' },
  ];

}
