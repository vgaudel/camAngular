import { Component, signal } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Basics } from './components/basics/basics';


@Component({
  selector: 'app-root',
  imports: [Footer, Header, Basics],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('camAngular');
}
