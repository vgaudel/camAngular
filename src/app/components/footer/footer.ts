import { Component, inject } from '@angular/core';
import { Preferences } from '../../services/preferences';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  private _preferenceService = inject(Preferences);

  get preferenceService(){
    return this._preferenceService;
  }

}
