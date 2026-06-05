# Exercices — PrimeNG

> **Prérequis** : cours `06_PrimeNG.md`, projet Angular standalone v19+ avec PrimeNG installé et configuré (`providePrimeNG` dans `app.config.ts`, thème Aura).
> **Objectif** : pratiquer les composants PrimeNG les plus courants, du simple bouton à une mini-interface d'administration.
>
> Pour chaque exercice, créez un composant `epn{NN}-{nom}` dans `src/app/components/exos-primeng/`, et branchez-le dans le composant parent `exos-primeng` via un `<select>` + `@switch`, comme pour `exos-pipes`.

---

## Rappel des imports usuels

```typescript
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DatePickerModule } from 'primeng/datepicker';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
```

---

## Exercice 1 — Bouton et icônes (***)

**Contexte** : Premier contact avec PrimeNG.

**Objectif** : Créer le composant `ep01-boutons`. Afficher quatre `<p-button>` :
- `label="Sauvegarder"`, icône `pi pi-save`
- `label="Supprimer"`, `severity="danger"`, icône `pi pi-trash`
- `label="Annuler"`, `severity="secondary"`, `[outlined]="true"`
- Bouton avec uniquement `icon="pi pi-cog"` et `[rounded]="true"`

Au clic sur chacun, afficher dans la console le label associé.

**Modules** : `ButtonModule`

---

## Exercice 2 — Champs texte simples (***)

**Contexte** : Saisie utilisateur basique.

**Objectif** : Créer `ep02-saisie`. Définir trois propriétés (`signal` ou champ simple) : `nom`, `email`, `bio`.
- `nom` : `<input pInputText>` lié en two-way avec `[(ngModel)]`.
- `email` : `<input pInputText type="email">`.
- `bio` : `<textarea pTextarea rows="3">`.

Sous chaque champ, afficher la valeur en direct.

**Modules** : `InputTextModule`, `TextareaModule`, `FormsModule`

---

## Exercice 3 — Nombres et devises (***)

**Contexte** : Afficher des prix dans une boutique.

**Objectif** : Créer `ep03-prix` avec une propriété `prix = 49.9`. Afficher un `<p-inputNumber>` configuré en mode devise EUR (`mode="currency" currency="EUR" locale="fr-FR"`). Ajouter en dessous deux boutons +10 et -10 qui modifient la valeur.

**Modules** : `InputNumberModule`, `ButtonModule`

---

## Exercice 4 — Sélection simple et multiple (****)

**Contexte** : Filtres d'une fiche produit.

**Objectif** : Créer `ep04-selection`.
- Un `<p-select>` lié à `categorie`, avec les options : *Informatique*, *Électroménager*, *Vêtements*, *Livres*.
- Un `<p-multiSelect>` lié à `tags`, avec les options : *Promo*, *Nouveau*, *Stock limité*, *Bestseller*.

Afficher la sélection actuelle sous chaque composant.

**Modules** : `SelectModule`, `MultiSelectModule`, `FormsModule`

---

## Exercice 5 — Cases à cocher, radios et toggle (***)

**Contexte** : Préférences utilisateur.

**Objectif** : Créer `ep05-preferences`.
- Trois `<p-checkbox>` (newsletter, notifications, partageStats) liés en two-way.
- Un groupe de trois `<p-radioButton>` pour la fréquence d'envoi : *Quotidienne*, *Hebdomadaire*, *Mensuelle*.
- Un `<p-toggleSwitch>` pour le mode sombre, qui toggle la classe `app-dark` sur `document.documentElement`.

**Modules** : `CheckboxModule`, `RadioButtonModule`, `ToggleSwitchModule`

---

## Exercice 6 — Date picker (***)

**Contexte** : Réservation d'un créneau.

**Objectif** : Créer `ep06-reservation`.
- Un `<p-datePicker>` lié à `dateRdv`, format `dd/mm/yy`, avec `[showIcon]="true"` et `[minDate]="aujourdhui"`.
- Afficher la date sélectionnée formatée en français en dessous.

**Modules** : `DatePickerModule`

---

## Exercice 7 — Carte produit (****)

**Contexte** : Affichage d'un produit dans une boutique.

**Objectif** : Créer `ep07-carte-produit`. Définir un objet `produit = { nom, prix, image, badge }`.
- Encadrer dans un `<p-card>` avec `header` (image) et `subheader` (nom).
- Afficher le prix formaté en EUR.
- Afficher un `<p-tag>` coloré selon `badge` (`success` si "Nouveau", `warn` si "Promo", `info` sinon).
- Pied de carte : un `<p-button>` *Ajouter au panier*.

**Modules** : `CardModule`, `TagModule`, `ButtonModule`

---

## Exercice 8 — Tableau triable et paginé (****)

**Contexte** : Liste de collaborateurs.

**Objectif** : Créer `ep08-table-collaborateurs` avec un tableau de 15+ collaborateurs (nom, poste, salaire, dateEmbauche).
- Utiliser `<p-table>` avec `[paginator]="true"` et `[rows]="5"`.
- Colonnes triables (`pSortableColumn`).
- Le salaire formaté en EUR, la date au format `dd/MM/yyyy`.

**Modules** : `TableModule`

---

## Exercice 9 — Recherche globale dans un tableau (****)

**Contexte** : Filtrer la liste de l'exercice 8.

**Objectif** : Reprendre `ep08` (ou créer `ep09-table-filtre`). Ajouter une `<p-toolbar>` :
- Zone *start* : un champ de recherche `<input pInputText>` qui appelle `dt.filterGlobal($any($event.target).value, 'contains')`.
- Zone *end* : un `<p-button>` *Réinitialiser* qui vide le filtre.

Préciser `[globalFilterFields]` sur la table.

**Modules** : `TableModule`, `ToolbarModule`, `InputTextModule`, `ButtonModule`

---

## Exercice 10 — Menubar de navigation (***)

**Contexte** : Barre de navigation principale d'une application.

**Objectif** : Créer `ep10-menubar`. Définir un `MenuItem[]` :
- *Tableau de bord* (icon `pi pi-home`)
- *Catalogue* avec sous-menu : *Produits*, *Catégories*
- *Clients*
- *Paramètres* avec sous-menu : *Profil*, *Sécurité*

Au clic sur un item terminal, afficher son `label` dans la console (via `command`).

**Modules** : `MenubarModule`

---

## Exercice 11 — Dialog modale (****)

**Contexte** : Confirmation d'une action.

**Objectif** : Créer `ep11-dialog`.
- Un bouton *Voir détails*.
- Au clic, ouvrir un `<p-dialog>` (`[(visible)]`, `[modal]="true"`, `header="Détails"`, `[style]="{width:'30rem'}"`).
- Le contenu affiche du texte libre et un bouton *Fermer*.

**Modules** : `DialogModule`, `ButtonModule`

---

## Exercice 12 — Toast de notifications (****)

**Contexte** : Retour utilisateur après une action.

**Objectif** : Créer `ep12-toast`. Déclarer `MessageService` dans `providers` du composant et placer `<p-toast />` dans le template.
- Quatre boutons qui déclenchent un toast de chaque sévérité : `success`, `info`, `warn`, `error`.
- Chaque toast doit avoir un `summary` et un `detail` parlants.

**Modules** : `ToastModule`, `ButtonModule`

---

## Exercice 13 — Confirm dialog avant suppression (****)

**Contexte** : Sécuriser une action destructive.

**Objectif** : Créer `ep13-confirmation`. Déclarer `ConfirmationService` et `MessageService` dans `providers`, et placer `<p-confirmDialog />` + `<p-toast />`.
- Un bouton *Supprimer le compte* (`severity="danger"`) qui appelle `confirm.confirm({...})`.
- En cas d'acceptation : toast `success` "Compte supprimé".
- En cas de refus : toast `info` "Annulé".

**Modules** : `ConfirmDialogModule`, `ToastModule`, `ButtonModule`

---

## Exercice 14 — Formulaire réactif avec validation (*****)

**Contexte** : Inscription utilisateur.

**Objectif** : Créer `ep14-form-inscription` avec un `FormBuilder` :
- `nom` (requis)
- `email` (requis, `Validators.email`)
- `motDePasse` (requis, `minLength(8)`) → `<p-password [toggleMask]="true">`
- `dateNaissance` (requis) → `<p-datePicker>`
- `role` → `<p-select>` (Admin / User)
- `accepteCGU` (requis, `Validators.requiredTrue`) → `<p-checkbox>`

Pour chaque champ invalide et touché, afficher un `<p-message severity="error">` sous le champ. Le bouton *Créer le compte* est désactivé tant que le formulaire est invalide. À la soumission valide, toast `success`.

**Modules** : `ReactiveFormsModule`, `InputTextModule`, `PasswordModule`, `DatePickerModule`, `SelectModule`, `CheckboxModule`, `MessageModule`, `ButtonModule`, `ToastModule`

---

## Exercice 15 — Mini back-office (synthèse) (*****)

**Contexte** : Mettre tout bout à bout.

**Objectif** : Créer `ep15-admin-utilisateurs`. Reproduire en miniature l'atelier du cours :
1. `<p-toolbar>` : bouton *Nouveau* à gauche, champ de recherche à droite.
2. `<p-table>` paginée et triable, colonnes : Nom, Email, Rôle (`<p-tag>`), Actif (`<p-toggleSwitch>`), Actions (boutons éditer / supprimer).
3. Au clic sur *Nouveau* ou *Éditer* → ouvrir un `<p-dialog>` contenant le formulaire de l'exercice 14 (simplifié : nom, email, rôle, actif).
4. Au clic sur *Supprimer* → `<p-confirmDialog>` puis `<p-toast>`.
5. Stocker la liste dans un `signal<User[]>` ; le `<p-toggleSwitch>` doit modifier `actif` dans le signal.

Soigner l'espacement avec des classes flex/grid.

**Modules** : tous ceux des exercices précédents.

---

## Récapitulatif

| Exo | Composants PrimeNG |
|-----|--------------------|
| 1 | `Button` |
| 2 | `InputText`, `Textarea` |
| 3 | `InputNumber`, `Button` |
| 4 | `Select`, `MultiSelect` |
| 5 | `Checkbox`, `RadioButton`, `ToggleSwitch` |
| 6 | `DatePicker` |
| 7 | `Card`, `Tag`, `Button` |
| 8 | `Table` |
| 9 | `Table`, `Toolbar`, `InputText` |
| 10 | `Menubar` |
| 11 | `Dialog` |
| 12 | `Toast` + `MessageService` |
| 13 | `ConfirmDialog` + `ConfirmationService` |
| 14 | Reactive Forms + `InputText`, `Password`, `DatePicker`, `Select`, `Checkbox`, `Message` |
| 15 | Synthèse (Toolbar + Table + Dialog + Form + Toast + Confirm) |
