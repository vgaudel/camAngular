import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

type Severity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

@Component({
  selector: 'app-ep07-carte-produit',
  imports: [CurrencyPipe, CardModule, TagModule, ButtonModule],
  templateUrl: './ep07-carte-produit.html',
  styleUrl: './ep07-carte-produit.scss',
})
export class Ep07CarteProduit {
  produit = {
    nom: 'Clavier mécanique RGB',
    prix: 129.99,
    image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
    badge: 'Nouveau',
  };

  get severite(): Severity {
    switch (this.produit.badge) {
      case 'Nouveau': return 'success';
      case 'Promo':   return 'warn';
      default:        return 'info';
    }
  }

  ajouterPanier() {
    console.log('Ajout au panier :', this.produit.nom);
  }
}
