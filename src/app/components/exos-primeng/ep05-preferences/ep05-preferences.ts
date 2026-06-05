import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-ep05-preferences',
  imports: [FormsModule, JsonPipe, CheckboxModule, RadioButtonModule, ToggleSwitchModule],
  templateUrl: './ep05-preferences.html',
  styleUrl: './ep05-preferences.scss',
})
export class Ep05Preferences {
  newsletter = false;
  notifications = true;
  partageStats = false;

  frequence: 'quotidienne' | 'hebdomadaire' | 'mensuelle' = 'hebdomadaire';

  dark = false;

  toggleDark() {
    document.documentElement.classList.toggle('app-dark', this.dark);
  }
}
