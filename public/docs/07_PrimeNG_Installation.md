# Installation de PrimeNG — Récapitulatif

> Ce document liste **précisément** tout ce qui a été ajouté au projet Angular pour faire fonctionner les exercices PrimeNG (dossier [exos-primeng](../src/app/components/exos-primeng)).

---

## 1. Packages npm installés

Commande exécutée à la racine de `camAngular/` :

```bash
npm install primeng @primeng/themes primeicons --legacy-peer-deps
npm install @angular/animations@^21.2.0 --legacy-peer-deps
```

> Le flag `--legacy-peer-deps` désactive la résolution stricte des `peerDependencies` introduite par npm 7+. Il est utilisé ici car certains presets PrimeNG ciblent Angular 19/20 dans leurs peerDeps, alors que le projet utilise Angular 21.

### Détail des packages

| Package | Version installée | Rôle |
|---------|-------------------|------|
| `primeng` | `^21.1.9` | Bibliothèque principale : tous les composants (`p-button`, `p-table`, `p-dialog`, etc.) ainsi que les services (`MessageService`, `ConfirmationService`) et l'API `MenuItem`. |
| `@primeng/themes` | `^21.0.4` | Presets de thèmes runtime (`Aura`, `Material`, `Lara`, `Nora`). Chaque preset est un objet de **design tokens** (couleurs, espacements, rayons…) consommé par `providePrimeNG`. |
| `primeicons` | `^7.0.0` | Police d'icônes utilisée par les composants (`pi pi-save`, `pi pi-trash`, etc.). Fichier CSS à importer une seule fois dans `styles.scss`. |
| `@angular/animations` | `^21.2.0` | Module d'animations Angular **requis** par PrimeNG (modales, toasts, overlays…). Sans lui, `provideAnimationsAsync()` échoue au build avec `Could not resolve "@angular/animations/browser"`. |

> Le warning *« @primeng/themes is no longer maintained, please migrate to @primeuix/themes »* est purement informatif : le package reste pleinement fonctionnel. Si vous souhaitez migrer, il suffira de remplacer l'import par `@primeuix/themes/aura`.

---

## 2. Modifications de fichiers existants

### 2.1 `package.json` — section `dependencies`

Quatre lignes ajoutées par npm :

```json
"@angular/animations": "^21.2.0",
"@primeng/themes":     "^21.0.4",
"primeicons":          "^7.0.0",
"primeng":             "^21.1.9",
```

### 2.2 `src/app/app.config.ts` — providers globaux

**Avant** : configuration minimale (router + error listeners).
**Après** : ajout des providers PrimeNG.

```typescript
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),         // animations Angular (overlays, modales…)
    providePrimeNG({
      theme: {
        preset: Aura,                 // thème actif
        options: {
          darkModeSelector: '.app-dark',  // bascule via classe sur <html>
        },
      },
      ripple: true,                   // effet ripple sur les boutons
    }),
  ],
};
```

**À retenir** :
- `provideAnimationsAsync()` charge les animations à la demande (mieux pour le bundle initial).
- `providePrimeNG({...})` est l'**unique** point de configuration de PrimeNG : thème, mode sombre, ripple, CSS layer, locale, etc.
- Le thème (`Aura`) est injecté dynamiquement par PrimeNG ; aucun import CSS de thème n'est nécessaire dans `styles.scss`.

### 2.3 `src/styles.scss` — icônes

Une seule ligne ajoutée :

```scss
@import 'primeicons/primeicons.css';
```

> Sans cet import, les classes `pi pi-*` afficheraient des carrés vides.

---

## 3. Vérification

Le build de développement passe sans erreur :

```bash
ng build --configuration development
```

> Sortie attendue :
> ```
> Application bundle generation complete. [4.357 seconds]
> ```

---

## 4. Schéma de ce qui a été branché

```
┌──────────────────────────────────────────────┐
│  package.json                                │
│   ├── primeng              (composants)      │
│   ├── @primeng/themes      (presets)         │
│   ├── primeicons           (icônes)          │
│   └── @angular/animations  (overlays)        │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│  app.config.ts                               │
│   ├── provideAnimationsAsync()               │
│   └── providePrimeNG({ theme: Aura, ... })   │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│  styles.scss                                 │
│   └── @import 'primeicons/primeicons.css'    │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│  Composants standalone                       │
│   imports: [ButtonModule, TableModule, ...]  │
└──────────────────────────────────────────────┘
```

---

## 5. À ne pas oublier dans un composant qui utilise PrimeNG

Pour chaque composant standalone qui utilise un composant PrimeNG :

```typescript
import { ButtonModule } from 'primeng/button';
import { TableModule }  from 'primeng/table';

@Component({
  selector: 'app-foo',
  imports: [ButtonModule, TableModule],   // ← obligatoire
  templateUrl: './foo.html',
})
export class Foo {}
```

Pour `MessageService` et `ConfirmationService` (toasts et confirmations) :
- soit déclarés dans `providers` du composant (scope local, ce qui est fait dans les exos 12/13/15) ;
- soit déclarés dans `app.config.ts` (scope global, partagé par toute l'app).

---

## 6. Pour aller plus loin

| Besoin | À ajouter |
|--------|-----------|
| Tailwind CSS aux côtés de PrimeNG | Configurer `cssLayer` dans `providePrimeNG` |
| Charts (Doughnut, Line…) | `npm i chart.js` puis import du composant `ChartModule` |
| Tableaux Excel-like (édition de cellules) | Activer `[editMode]="'cell'"` sur `<p-table>` |
| Internationalisation | Configurer `translation` dans `providePrimeNG` |
