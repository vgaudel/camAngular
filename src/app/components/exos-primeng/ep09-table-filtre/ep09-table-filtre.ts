import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

interface Collab {
  nom: string;
  poste: string;
  salaire: number;
  dateEmbauche: Date;
}

@Component({
  selector: 'app-ep09-table-filtre',
  imports: [FormsModule, CurrencyPipe, DatePipe, TableModule, ToolbarModule, InputTextModule, ButtonModule],
  templateUrl: './ep09-table-filtre.html',
  styleUrl: './ep09-table-filtre.scss',
})
export class Ep09TableFiltre {
  @ViewChild('dt') dt!: Table;
  recherche = '';

  collaborateurs: Collab[] = [
    { nom: 'Alice Martin',   poste: 'Développeuse',  salaire: 42000, dateEmbauche: new Date(2020, 2, 15) },
    { nom: 'Bruno Petit',    poste: 'Designer',      salaire: 38000, dateEmbauche: new Date(2019, 5, 1)  },
    { nom: 'Claire Dubois',  poste: 'Cheffe projet', salaire: 51000, dateEmbauche: new Date(2018, 8, 12) },
    { nom: 'David Leroy',    poste: 'DevOps',        salaire: 47000, dateEmbauche: new Date(2021, 0, 20) },
    { nom: 'Emma Bernard',   poste: 'Développeuse',  salaire: 40000, dateEmbauche: new Date(2022, 3, 5)  },
    { nom: 'Florian Roux',   poste: 'Architecte',    salaire: 62000, dateEmbauche: new Date(2017, 10, 3) },
    { nom: 'Gaëlle Moreau',  poste: 'QA',            salaire: 36000, dateEmbauche: new Date(2023, 1, 18) },
    { nom: 'Hugo Faure',     poste: 'Développeur',   salaire: 41000, dateEmbauche: new Date(2021, 6, 22) },
    { nom: 'Inès Garcia',    poste: 'Product Owner', salaire: 49000, dateEmbauche: new Date(2019, 11, 10) },
    { nom: 'Julien Robert',  poste: 'Développeur',   salaire: 43000, dateEmbauche: new Date(2020, 7, 30) },
    { nom: 'Kenza Lambert',  poste: 'Designer',      salaire: 39000, dateEmbauche: new Date(2022, 9, 14) },
    { nom: 'Lucas Mercier',  poste: 'DevOps',        salaire: 48000, dateEmbauche: new Date(2018, 4, 7)  },
    { nom: 'Manon Girard',   poste: 'Développeuse',  salaire: 44000, dateEmbauche: new Date(2021, 2, 9)  },
    { nom: 'Nicolas Vidal',  poste: 'Tech Lead',     salaire: 58000, dateEmbauche: new Date(2016, 1, 25) },
    { nom: 'Olivia Carpentier', poste: 'QA',         salaire: 37000, dateEmbauche: new Date(2023, 6, 1)  },
  ];

  filtrer(event: Event) {
    const v = (event.target as HTMLInputElement).value;
    this.dt.filterGlobal(v, 'contains');
  }

  reset() {
    this.recherche = '';
    this.dt.clear();
  }
}
