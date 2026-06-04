import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {


     // ────────────────────────────────────────────────────────────────────────────
  // FormGroup : regroupe plusieurs FormControl sous un objet unique.
  // Chaque FormControl accepte : (valeurInitiale, validateurSync, validateurAsync)
  //
  // Validators disponibles (built-in) :
  //   Validators.required          → le champ ne doit pas être vide
  //   Validators.requiredTrue      → la valeur doit être true (case à cocher)
  //   Validators.minLength(n)      → longueur minimale de n caractères
  //   Validators.maxLength(n)      → longueur maximale de n caractères
  //   Validators.min(n)            → valeur numérique minimale
  //   Validators.max(n)            → valeur numérique maximale
  //   Validators.email             → format email valide
  //   Validators.pattern(regex)    → correspond à une expression régulière
  //   Validators.nullValidator     → ne fait rien (placeholder utile)
  //   Validators.compose([...])    → combine plusieurs validateurs (équivalent à un tableau)
  //   Validators.composeAsync([...]) → idem pour les validateurs asynchrones
  // ────────────────────────────────────────────────────────────────────────────
  form = new FormGroup(
    {
      //Pour notre utilisateur on veut saisir 7 attributs

      userName : new FormControl('',[Validators.required,Validators.minLength(3)]),
      firstName : new FormControl('',[Validators.required]),
      lastName :new FormControl('',[Validators.required]),
      //dateNaissance
      email : new FormControl('',[Validators.required,Validators.email, this.emailEnding]),
      //newPassword
      //confirmPassword
      //roles
      
    },this.differentNames,[]
  )

  onSubmit(){
    console.log(this.form.value);
  }
  
  // Ci-dessous, nos validateurs personnalisés

  emailEnding (control: AbstractControl) : ValidationErrors | null {
    let value:string = control.value;
    let valide: boolean = value.slice(-5).includes('.');
    return valide ? null : { emailEnding : true }; 
  }

  differentNames (group: AbstractControl) : ValidationErrors | null{
    let valide = group.get('firstName')?.value !== group.get('lastName')?.value;
    return valide ? null : { similarNames : true };
  }

}
