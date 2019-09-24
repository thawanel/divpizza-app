import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comprar-pizza',
  templateUrl: './comprar-pizza.page.html',
  styleUrls: ['./comprar-pizza.page.scss'],
})
export class ComprarPizzaPage implements OnInit {

  constructor(private activateRoute:ActivatedRoute) {
    this.activateRoute.snapshot.params.id
   }

  ngOnInit() {
  }

}
