import { Routes } from '@angular/router';
import { Basics } from './components/basics/basics';
import { ExosBindings } from './components/exos-bindings/exos-bindings';
import { ExosSignals } from './components/exos-signals/exos-signals';
import { ExosIO } from './components/exos-io/exos-io';
import { Welcome } from './components/welcome/welcome';
import { NotFound } from './components/not-found/not-found';
import { UserForm } from './components/forms/user-form/user-form';

export const routes: Routes = [
    //Pour faire du routing, il faut construire un tableau de correspondances
    //entre des routes et des composants à afficher
    { path : 'welcome', component : Welcome },
    { path : '', redirectTo : 'welcome', pathMatch: 'full'},
    { path : 'basics', component : Basics },
    { path : 'exos-bindings', component : ExosBindings},
    { path : 'exos-signals', component : ExosSignals},
    { path : 'exos-io/:numExo', component : ExosIO},
    { path : 'exos-io', component : ExosIO},
    { path : 'user-form', component : UserForm},
    { path : '**', component : NotFound}
];
