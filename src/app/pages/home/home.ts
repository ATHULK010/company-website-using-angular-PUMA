import { Component } from '@angular/core';
import { Carosel } from "../../carosel/carosel";
import { Info } from "../info/info";

@Component({
  selector: 'app-home',
  imports: [Carosel, Info],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
