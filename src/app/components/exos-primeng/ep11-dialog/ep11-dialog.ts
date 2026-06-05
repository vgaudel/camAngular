import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ep11-dialog',
  imports: [DialogModule, ButtonModule],
  templateUrl: './ep11-dialog.html',
  styleUrl: './ep11-dialog.scss',
})
export class Ep11Dialog {
  visible = false;
}
