import { Component, inject } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-ep13-confirmation',
  imports: [ConfirmDialogModule, ToastModule, ButtonModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './ep13-confirmation.html',
  styleUrl: './ep13-confirmation.scss',
})
export class Ep13Confirmation {
  private confirm = inject(ConfirmationService);
  private msg = inject(MessageService);

  supprimer() {
    this.confirm.confirm({
      message: 'Voulez-vous vraiment supprimer votre compte ? Cette action est irréversible.',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Supprimer',
      rejectLabel: 'Annuler',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => this.msg.add({ severity: 'success', summary: 'Supprimé', detail: 'Compte supprimé' }),
      reject: () => this.msg.add({ severity: 'info', summary: 'Annulé', detail: 'Aucune modification' }),
    });
  }
}
