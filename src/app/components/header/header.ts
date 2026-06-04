import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  private _router = inject(Router);

  titleHeader = input.required<string>();
  goToWelcome(){
    this._router.navigate(["welcome"]);
  }
}
