# Composants UI avec PrimeNG

> **Prérequis** : Angular 19+ (standalone components), notions de Reactive Forms, SCSS.
> **Objectif** : Intégrer PrimeNG dans une application Angular standalone, configurer un thème, et construire une interface d'administration riche en composants.

---

## 1. Présentation de PrimeNG

**PrimeNG** est une bibliothèque open-source de composants UI pour Angular maintenue par PrimeTek. Elle propose plus de 90 composants prêts à l'emploi (tableaux, formulaires, menus, dialogues, charts, etc.) avec une API standalone moderne, un système de thèmes basé sur des **design tokens** et une accessibilité conforme WCAG.

**Pourquoi PrimeNG ?**
- Couvre la quasi-totalité des besoins d'une application métier sans dépendance tierce.
- API alignée sur Angular standalone (pas de `NgModule` à importer).
- Système de thèmes runtime (Aura, Material, Lara, Nora) personnalisable via tokens.
- Excellente intégration avec les `Reactive Forms` et `FormsModule`.

### Installation dans un projet Angular v19+ standalone

```bash
ng new admin-app --standalone --style=scss --routing
cd admin-app
npm install primeng @primeng/themes primeicons
```

> Les **icônes** (`primeicons`) sont distribuées séparément. Le package `@primeng/themes` contient les presets de thèmes modernes (Aura, Material, Lara, Nora).

### Configuration globale dans `app.config.ts`

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: { name: 'primeng', order: 'theme, base, primeng' }
        }
      },
      ripple: true
    })
  ]
};
```

### Import des styles dans `styles.scss`

```scss
/* Icônes PrimeIcons */
@import 'primeicons/primeicons.css';
```

> Les styles des composants sont injectés dynamiquement par `providePrimeNG` — pas besoin d'importer un CSS de thème global.

### Vérification rapide

Dans `app.ts` :

```typescript
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  template: `<p-button label="Hello PrimeNG" icon="pi pi-check" />`
})
export class App {}
```

---

## 2. Configuration du thème et personnalisation CSS

### Choisir un preset

Quatre presets sont disponibles dans `@primeng/themes` :

| Preset | Identité visuelle |
|--------|-------------------|
| `aura` | Design moderne par défaut, recommandé |
| `material` | Material Design |
| `lara` | Style Bootstrap-like |
| `nora` | Plus dense, type "enterprise" |

```typescript
import Material from '@primeng/themes/material';
// ...
providePrimeNG({ theme: { preset: Material } })
```

### Personnaliser un preset avec `definePreset`

```typescript
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}', 100: '{indigo.100}', 200: '{indigo.200}',
      300: '{indigo.300}', 400: '{indigo.400}', 500: '{indigo.500}',
      600: '{indigo.600}', 700: '{indigo.700}', 800: '{indigo.800}',
      900: '{indigo.900}', 950: '{indigo.950}'
    }
  }
});

providePrimeNG({ theme: { preset: MyPreset } });
```

### Mode sombre

Activer un sélecteur CSS qui bascule le thème :

```typescript
providePrimeNG({
  theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } }
});
```

```typescript
// Dans un composant
toggleDark() {
  document.documentElement.classList.toggle('app-dark');
}
```

### Surcharger une variable CSS ponctuellement

```scss
:root {
  --p-primary-color: #6d28d9;
  --p-border-radius: 12px;
}

.app-dark {
  --p-surface-0: #18181b;
}
```

### CSS Layer

L'option `cssLayer` permet de contrôler la priorité de cascade vis-à-vis de Tailwind ou de votre design system :

```typescript
options: { cssLayer: { name: 'primeng', order: 'tailwind-base, primeng, tailwind-utilities' } }
```

---

## 3. Composants de saisie et d'affichage des données

### Saisie

| Composant | Module | Usage |
|-----------|--------|-------|
| `<p-inputText>` | `InputTextModule` | Champ texte simple |
| `<p-password>` | `PasswordModule` | Mot de passe avec jauge |
| `<p-inputNumber>` | `InputNumberModule` | Nombre avec format |
| `<p-calendar>` / `<p-datePicker>` | `DatePickerModule` | Sélection de date |
| `<p-select>` | `SelectModule` | Liste déroulante |
| `<p-multiSelect>` | `MultiSelectModule` | Sélection multiple |
| `<p-checkbox>`, `<p-radioButton>` | `CheckboxModule`, `RadioButtonModule` | Cases / radios |
| `<p-toggleSwitch>` | `ToggleSwitchModule` | Interrupteur on/off |
| `<p-textarea>` | `TextareaModule` | Zone de texte |

```html
<input pInputText [(ngModel)]="nom" placeholder="Nom" />
<p-inputNumber [(ngModel)]="prix" mode="currency" currency="EUR" />
<p-datePicker [(ngModel)]="dateNaissance" dateFormat="dd/mm/yy" />
<p-select [options]="roles" [(ngModel)]="role" optionLabel="label" placeholder="Rôle" />
```

### Affichage de données

#### `<p-table>` — tableau riche

```typescript
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-users',
  imports: [TableModule, TagModule],
  template: `
    <p-table [value]="users" [paginator]="true" [rows]="10"
             [globalFilterFields]="['nom', 'email']" #dt>
      <ng-template pTemplate="caption">
        <input pInputText type="text"
               (input)="dt.filterGlobal($any($event.target).value, 'contains')"
               placeholder="Recherche..." />
      </ng-template>

      <ng-template pTemplate="header">
        <tr>
          <th pSortableColumn="nom">Nom <p-sortIcon field="nom" /></th>
          <th>Email</th>
          <th>Statut</th>
        </tr>
      </ng-template>

      <ng-template pTemplate="body" let-u>
        <tr>
          <td>{{ u.nom }}</td>
          <td>{{ u.email }}</td>
          <td>
            <p-tag [value]="u.actif ? 'Actif' : 'Inactif'"
                   [severity]="u.actif ? 'success' : 'danger'" />
          </td>
        </tr>
      </ng-template>
    </p-table>
  `
})
export class Users { users = [/* ... */]; }
```

| Composant complémentaire | Usage |
|--------------------------|-------|
| `<p-card>` | Carte avec en-tête / pied |
| `<p-tag>`, `<p-chip>` | Badges et étiquettes |
| `<p-avatar>`, `<p-avatarGroup>` | Avatars utilisateur |
| `<p-image>` | Image avec zoom intégré |

---

## 4. Composants de navigation et de mise en page

### Navigation

| Composant | Description |
|-----------|-------------|
| `<p-menubar>` | Barre de menu horizontale avec sous-menus |
| `<p-menu>` | Menu vertical contextuel |
| `<p-tabView>` / `<p-tabs>` | Onglets |
| `<p-breadcrumb>` | Fil d'Ariane |
| `<p-tieredMenu>`, `<p-megaMenu>` | Menus à plusieurs niveaux |
| `<p-panelMenu>` | Menu vertical accordéon (idéal pour sidebar) |

```typescript
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  imports: [MenubarModule],
  template: `<p-menubar [model]="items" />`
})
export class Topbar {
  items: MenuItem[] = [
    { label: 'Tableau de bord', icon: 'pi pi-home', routerLink: '/' },
    {
      label: 'Utilisateurs', icon: 'pi pi-users',
      items: [
        { label: 'Liste', routerLink: '/users' },
        { label: 'Nouveau', routerLink: '/users/new' }
      ]
    }
  ];
}
```

### Mise en page

| Composant | Description |
|-----------|-------------|
| `<p-card>` | Conteneur avec header/footer |
| `<p-panel>` | Panneau pliable |
| `<p-divider>` | Séparateur horizontal/vertical |
| `<p-fieldset>` | Bloc à légende |
| `<p-toolbar>` | Barre d'outils (zone gauche/droite) |
| `<p-splitter>` | Diviseur redimensionnable |
| `<p-drawer>` (ex-`<p-sidebar>`) | Tiroir latéral |

```html
<p-toolbar>
  <ng-template pTemplate="start">
    <p-button label="Nouveau" icon="pi pi-plus" />
  </ng-template>
  <ng-template pTemplate="end">
    <p-button icon="pi pi-cog" severity="secondary" />
  </ng-template>
</p-toolbar>
```

---

## 5. Composants de feedback utilisateur

| Composant | Module | Usage |
|-----------|--------|-------|
| `<p-toast>` | `ToastModule` + `MessageService` | Notifications éphémères |
| `<p-message>` | `MessageModule` | Message inline |
| `<p-confirmDialog>` | `ConfirmDialogModule` + `ConfirmationService` | Confirmation modale |
| `<p-dialog>` | `DialogModule` | Modale générique |
| `<p-progressSpinner>`, `<p-progressBar>` | `ProgressSpinnerModule`, `ProgressBarModule` | Indicateurs de chargement |
| `<p-skeleton>` | `SkeletonModule` | Placeholder pendant le chargement |

### Toasts via `MessageService`

```typescript
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-demo',
  imports: [ToastModule],
  providers: [MessageService],
  template: `
    <p-toast />
    <p-button label="Sauvegarder" (onClick)="save()" />
  `
})
export class Demo {
  constructor(private msg: MessageService) {}

  save() {
    this.msg.add({ severity: 'success', summary: 'OK', detail: 'Données enregistrées' });
  }
}
```

> Pour rendre `MessageService` disponible globalement, le déclarer dans `app.config.ts` (`providers: [MessageService]`).

### Confirmation

```html
<p-confirmDialog />
<p-button label="Supprimer" severity="danger" (onClick)="delete()" />
```

```typescript
delete() {
  this.confirm.confirm({
    message: 'Confirmer la suppression ?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => { /* ... */ }
  });
}
```

---

## 6. Intégration avec les Reactive Forms et validation visuelle

PrimeNG implémente `ControlValueAccessor` sur tous ses composants de saisie : ils sont compatibles directement avec `FormControl` / `FormGroup`.

### Formulaire complet

```typescript
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-user-form',
  imports: [
    ReactiveFormsModule, InputTextModule, PasswordModule,
    SelectModule, DatePickerModule, ButtonModule, MessageModule
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()" class="flex flex-col gap-3 w-96">

      <div class="flex flex-col gap-1">
        <label for="email">Email</label>
        <input pInputText id="email" formControlName="email"
               [class.ng-invalid]="email.invalid && email.touched"
               [class.ng-dirty]="email.touched" />
        @if (email.invalid && email.touched) {
          <p-message severity="error" text="Email invalide" />
        }
      </div>

      <div class="flex flex-col gap-1">
        <label for="pwd">Mot de passe</label>
        <p-password id="pwd" formControlName="password" [toggleMask]="true" />
      </div>

      <div class="flex flex-col gap-1">
        <label>Rôle</label>
        <p-select formControlName="role" [options]="roles"
                  optionLabel="label" optionValue="value" placeholder="Choisir..." />
      </div>

      <p-button type="submit" label="Créer" [disabled]="form.invalid" />
    </form>
  `
})
export class UserForm {
  private fb = inject(FormBuilder);

  roles = [
    { label: 'Administrateur', value: 'ADMIN' },
    { label: 'Utilisateur', value: 'USER' }
  ];

  form = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    role:     ['USER', Validators.required]
  });

  get email() { return this.form.controls.email; }

  submit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
```

### Classes utilitaires de validation

PrimeNG s'appuie sur les classes Angular standard `ng-invalid`, `ng-dirty`, `ng-touched`. On peut donc styliser globalement :

```scss
.ng-invalid.ng-dirty {
  border-color: var(--p-red-500) !important;
}
```

### Astuce : `<p-iftaLabel>` et `<p-floatLabel>`

```html
<p-floatLabel>
  <input pInputText id="nom" formControlName="nom" />
  <label for="nom">Nom</label>
</p-floatLabel>
```

---

## Atelier — Construire une interface d'administration avec PrimeNG

**Objectif** : assembler les composants vus en cours pour réaliser un mini back-office de gestion d'utilisateurs.

### Cahier des charges

1. **Layout général**
   - Une `<p-menubar>` en haut avec : *Tableau de bord*, *Utilisateurs*, *Paramètres*.
   - Un bouton de bascule mode clair / sombre dans la zone `end` du menubar.
2. **Page "Utilisateurs"**
   - Une `<p-toolbar>` avec un bouton **Nouveau** à gauche et un champ de recherche à droite.
   - Une `<p-table>` paginée (10 par page), triable et filtrable globalement.
   - Colonnes : Avatar, Nom, Email, Rôle (`<p-tag>` coloré), Actif (`<p-toggleSwitch>`), Actions (Éditer / Supprimer).
3. **Création / édition**
   - Au clic sur **Nouveau** ou **Éditer**, ouvrir un `<p-dialog>` contenant un `Reactive Form` avec :
     - Nom (requis)
     - Email (requis, validateur email)
     - Rôle (`<p-select>` : Admin, User, Guest)
     - Date d'embauche (`<p-datePicker>`)
     - Actif (`<p-toggleSwitch>`)
   - Boutons **Annuler** et **Enregistrer** (désactivé si formulaire invalide).
4. **Feedback**
   - À l'enregistrement : `<p-toast>` `success`.
   - À la suppression : `<p-confirmDialog>` avant suppression, puis `<p-toast>` `info`.
5. **Bonus**
   - Stocker la liste dans un `signal()` et afficher le nombre total d'utilisateurs dans une `<p-card>` du tableau de bord.
   - Ajouter un `<p-skeleton>` pendant un faux chargement initial de 1 seconde.

### Étapes suggérées

1. `ng new admin-primeng --standalone --style=scss --routing`
2. Installer les dépendances et configurer `app.config.ts` (cf. section 1).
3. Créer trois routes : `/dashboard`, `/users`, `/settings`.
4. Créer le composant `Topbar` avec `<p-menubar>` et le placer dans `app.html`.
5. Créer un service `UsersService` exposant un `signal<User[]>`.
6. Implémenter la page `users.ts` avec `<p-table>` + `<p-toolbar>`.
7. Extraire le formulaire dans `user-form.ts` utilisé dans le `<p-dialog>`.
8. Brancher `MessageService` et `ConfirmationService` (les déclarer dans `app.config.ts`).
9. Ajouter le toggle dark mode (`document.documentElement.classList.toggle('app-dark')`).
10. Soigner l'espacement avec les classes utilitaires PrimeFlex ou Tailwind.

### Critères de validation

- [ ] Le projet démarre sans erreur de console.
- [ ] La table affiche, trie, filtre et pagine correctement.
- [ ] Le formulaire bloque la soumission tant qu'il est invalide.
- [ ] Le mode sombre fonctionne sur l'ensemble de l'application.
- [ ] Toasts et confirmations s'affichent comme prévu.

---

## Récapitulatif

| Section | Concepts clés |
|---------|---------------|
| 1 | `npm install primeng @primeng/themes primeicons`, `providePrimeNG` |
| 2 | Presets (Aura, Material, Lara, Nora), `definePreset`, `darkModeSelector` |
| 3 | `InputText`, `Select`, `DatePicker`, `Table`, `Tag` |
| 4 | `Menubar`, `Toolbar`, `Card`, `Drawer` |
| 5 | `Toast` + `MessageService`, `ConfirmDialog` + `ConfirmationService`, `Dialog` |
| 6 | `ControlValueAccessor`, `ng-invalid`/`ng-dirty`, `<p-message>`, `<p-floatLabel>` |
