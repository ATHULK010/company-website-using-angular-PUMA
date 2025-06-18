import { Component } from '@angular/core';
import { Card } from "../../card/card";
import { Carosel2 } from "../../carosel2/carosel2";

@Component({
  selector: 'app-products',
  imports: [Card, Carosel2],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

}
