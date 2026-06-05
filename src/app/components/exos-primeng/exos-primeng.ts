import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ep01Boutons } from './ep01-boutons/ep01-boutons';
import { Ep02Saisie } from './ep02-saisie/ep02-saisie';
import { Ep03Prix } from './ep03-prix/ep03-prix';
import { Ep04Selection } from './ep04-selection/ep04-selection';
import { Ep05Preferences } from './ep05-preferences/ep05-preferences';
import { Ep06Reservation } from './ep06-reservation/ep06-reservation';
import { Ep07CarteProduit } from './ep07-carte-produit/ep07-carte-produit';
import { Ep08TableCollaborateurs } from './ep08-table-collaborateurs/ep08-table-collaborateurs';
import { Ep09TableFiltre } from './ep09-table-filtre/ep09-table-filtre';
import { Ep10Menubar } from './ep10-menubar/ep10-menubar';
import { Ep11Dialog } from './ep11-dialog/ep11-dialog';
import { Ep12Toast } from './ep12-toast/ep12-toast';
import { Ep13Confirmation } from './ep13-confirmation/ep13-confirmation';
import { Ep14FormInscription } from './ep14-form-inscription/ep14-form-inscription';
import { Ep15AdminUtilisateurs } from './ep15-admin-utilisateurs/ep15-admin-utilisateurs';

@Component({
  selector: 'app-exos-primeng',
  imports: [
    FormsModule,
    Ep01Boutons, Ep02Saisie, Ep03Prix, Ep04Selection, Ep05Preferences,
    Ep06Reservation, Ep07CarteProduit, Ep08TableCollaborateurs, Ep09TableFiltre,
    Ep10Menubar, Ep11Dialog, Ep12Toast, Ep13Confirmation, Ep14FormInscription,
    Ep15AdminUtilisateurs,
  ],
  templateUrl: './exos-primeng.html',
  styleUrl: './exos-primeng.scss',
})
export class ExosPrimeng {
  composants: string[] = [
    'ep01-boutons',
    'ep02-saisie',
    'ep03-prix',
    'ep04-selection',
    'ep05-preferences',
    'ep06-reservation',
    'ep07-carte-produit',
    'ep08-table-collaborateurs',
    'ep09-table-filtre',
    'ep10-menubar',
    'ep11-dialog',
    'ep12-toast',
    'ep13-confirmation',
    'ep14-form-inscription',
    'ep15-admin-utilisateurs',
  ];
  selectedComponent: string = this.composants[0];
}
