import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ep14-form-inscription',
  imports: [
    ReactiveFormsModule, InputTextModule, PasswordModule, DatePickerModule,
    SelectModule, CheckboxModule, MessageModule, ButtonModule, ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './ep14-form-inscription.html',
  styleUrl: './ep14-form-inscription.scss',
})
export class Ep14FormInscription {
  private fb = inject(FormBuilder);
  private msg = inject(MessageService);

  roles = [
    { label: 'Administrateur', value: 'ADMIN' },
    { label: 'Utilisateur',    value: 'USER'  },
  ];

  form = this.fb.group({
    nom:           ['', Validators.required],
    email:         ['', [Validators.required, Validators.email]],
    motDePasse:    ['', [Validators.required, Validators.minLength(8)]],
    dateNaissance: [null as Date | null, Validators.required],
    role:          ['USER', Validators.required],
    accepteCGU:    [false, Validators.requiredTrue],
  });

  get f() { return this.form.controls; }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.msg.add({ severity: 'success', summary: 'Compte créé', detail: this.f.email.value ?? '' });
  }
}
