import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Preferences } from '../../services/preferences';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  private _router = inject(Router);
  private _preferenceService = inject(Preferences);

  titleHeader = input.required<string>();
  
  get preferenceService(){
    return this._preferenceService;
  }
  
  goToWelcome(){
    this._router.navigate(["welcome"]);
  }
}
