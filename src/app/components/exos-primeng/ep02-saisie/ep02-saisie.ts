import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-ep02-saisie',
  imports: [FormsModule, InputTextModule, TextareaModule],
  templateUrl: './ep02-saisie.html',
  styleUrl: './ep02-saisie.scss',
})
export class Ep02Saisie {
  nom = '';
  email = '';
  bio = '';
}
