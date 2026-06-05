import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-ep04-selection',
  imports: [FormsModule, SelectModule, MultiSelectModule],
  templateUrl: './ep04-selection.html',
  styleUrl: './ep04-selection.scss',
})
export class Ep04Selection {
  categories = ['Informatique', 'Électroménager', 'Vêtements', 'Livres'];
  tagsDispo = ['Promo', 'Nouveau', 'Stock limité', 'Bestseller'];

  categorie: string | null = null;
  tags: string[] = [];
}
