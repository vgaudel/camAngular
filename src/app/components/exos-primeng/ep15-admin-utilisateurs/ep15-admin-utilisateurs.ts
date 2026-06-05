import { Component, ViewChild, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { Table, TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { ConfirmationService, MessageService } from 'primeng/api';

interface User {
  id: number;
  nom: string;
  email: string;
  role: 'ADMIN' | 'USER' | 'GUEST';
  actif: boolean;
}

@Component({
  selector: 'app-ep15-admin-utilisateurs',
  imports: [
    FormsModule, ReactiveFormsModule, TableModule, ToolbarModule, InputTextModule,
    ButtonModule, TagModule, ToggleSwitchModule, DialogModule, SelectModule,
    ToastModule, ConfirmDialogModule, MessageModule,
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './ep15-admin-utilisateurs.html',
  styleUrl: './ep15-admin-utilisateurs.scss',
})
export class Ep15AdminUtilisateurs {
  @ViewChild('dt') dt!: Table;

  private fb = inject(FormBuilder);
  private msg = inject(MessageService);
  private confirm = inject(ConfirmationService);

  recherche = '';
  dialogVisible = false;
  editId: number | null = null;

  roles = [
    { label: 'Administrateur', value: 'ADMIN' },
    { label: 'Utilisateur',    value: 'USER'  },
    { label: 'Invité',         value: 'GUEST' },
  ];

  users = signal<User[]>([
    { id: 1, nom: 'Alice Martin',  email: 'alice@demo.fr',  role: 'ADMIN', actif: true  },
    { id: 2, nom: 'Bruno Petit',   email: 'bruno@demo.fr',  role: 'USER',  actif: true  },
    { id: 3, nom: 'Claire Dubois', email: 'claire@demo.fr', role: 'USER',  actif: false },
    { id: 4, nom: 'David Leroy',   email: 'david@demo.fr',  role: 'GUEST', actif: true  },
    { id: 5, nom: 'Emma Bernard',  email: 'emma@demo.fr',   role: 'USER',  actif: true  },
  ]);

  form = this.fb.group({
    nom:   ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role:  ['USER' as User['role'], Validators.required],
    actif: [true],
  });

  get f() { return this.form.controls; }

  filtrer(event: Event) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  severite(role: User['role']) {
    return role === 'ADMIN' ? 'danger' : role === 'USER' ? 'info' : 'secondary';
  }

  toggleActif(u: User) {
    this.users.update(list =>
      list.map(x => x.id === u.id ? { ...x, actif: !x.actif } : x)
    );
  }

  nouveau() {
    this.editId = null;
    this.form.reset({ nom: '', email: '', role: 'USER', actif: true });
    this.dialogVisible = true;
  }

  editer(u: User) {
    this.editId = u.id;
    this.form.reset({ nom: u.nom, email: u.email, role: u.role, actif: u.actif });
    this.dialogVisible = true;
  }

  enregistrer() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const v = this.form.value;
    if (this.editId === null) {
      const id = Math.max(0, ...this.users().map(x => x.id)) + 1;
      this.users.update(l => [...l, {
        id, nom: v.nom!, email: v.email!, role: v.role!, actif: v.actif ?? true,
      }]);
      this.msg.add({ severity: 'success', summary: 'Créé', detail: v.nom ?? '' });
    } else {
      this.users.update(l => l.map(x => x.id === this.editId
        ? { ...x, nom: v.nom!, email: v.email!, role: v.role!, actif: v.actif ?? true }
        : x));
      this.msg.add({ severity: 'success', summary: 'Modifié', detail: v.nom ?? '' });
    }
    this.dialogVisible = false;
  }

  supprimer(u: User) {
    this.confirm.confirm({
      message: `Supprimer ${u.nom} ?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Supprimer',
      rejectLabel: 'Annuler',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.users.update(l => l.filter(x => x.id !== u.id));
        this.msg.add({ severity: 'info', summary: 'Supprimé', detail: u.nom });
      },
    });
  }
}
