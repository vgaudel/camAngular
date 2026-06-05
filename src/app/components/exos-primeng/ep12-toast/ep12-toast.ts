import { Component, inject } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ep12-toast',
  imports: [ToastModule, ButtonModule],
  providers: [MessageService],
  templateUrl: './ep12-toast.html',
  styleUrl: './ep12-toast.scss',
})
export class Ep12Toast {
  private msg = inject(MessageService);

  success() {
    this.msg.add({ severity: 'success', summary: 'Succès', detail: 'Opération réussie' });
  }
  info() {
    this.msg.add({ severity: 'info', summary: 'Information', detail: 'Nouvelle version disponible' });
  }
  warn() {
    this.msg.add({ severity: 'warn', summary: 'Attention', detail: 'Stock bientôt épuisé' });
  }
  error() {
    this.msg.add({ severity: 'error', summary: 'Erreur', detail: 'Impossible de contacter le serveur' });
  }
}
