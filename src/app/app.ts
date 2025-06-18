import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Card } from './card/card';
import { Carosel } from './carosel/carosel';
import { Info } from './pages/info/info';
import { Footer } from "./footer/footer";
import { Carosel2 } from './carosel2/carosel2';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Card, Carosel, Info, Footer,Carosel2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'puma';
}
