import { Component, signal } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Basics } from './components/basics/basics';
import { ExosBindings } from './components/exos-bindings/exos-bindings';


@Component({
  selector: 'app-root',
  imports: [Footer, Header, Basics, ExosBindings],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('camAngular');
}
