import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ep10-menubar',
  imports: [MenubarModule],
  templateUrl: './ep10-menubar.html',
  styleUrl: './ep10-menubar.scss',
})
export class Ep10Menubar {
  log = (label: string) => () => console.log('Menu :', label);

  items: MenuItem[] = [
    { label: 'Tableau de bord', icon: 'pi pi-home', command: this.log('Tableau de bord') },
    {
      label: 'Catalogue', icon: 'pi pi-shopping-bag',
      items: [
        { label: 'Produits',   icon: 'pi pi-box',  command: this.log('Produits') },
        { label: 'Catégories', icon: 'pi pi-tags', command: this.log('Catégories') },
      ],
    },
    { label: 'Clients', icon: 'pi pi-users', command: this.log('Clients') },
    {
      label: 'Paramètres', icon: 'pi pi-cog',
      items: [
        { label: 'Profil',   icon: 'pi pi-user',   command: this.log('Profil') },
        { label: 'Sécurité', icon: 'pi pi-shield', command: this.log('Sécurité') },
      ],
    },
  ];
}
