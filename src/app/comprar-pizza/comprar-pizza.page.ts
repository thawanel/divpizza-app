import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comprar-pizza',
  templateUrl: './comprar-pizza.page.html',
  styleUrls: ['./comprar-pizza.page.scss'],
})
export class ComprarPizzaPage implements OnInit {
  idPizza;
  nomePizza;
  descricaoPizza;
  precoPizza;
  qtdPizza = 1;
  precoPizzaFixo;

  constructor(private activateRoute:ActivatedRoute) {
  
   }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.idPizza = this.activateRoute.snapshot.params.id
    let pizzaString = localStorage.getItem(this.idPizza) //pega o item no localStorage 
    let pizzaObjeto = JSON.parse(pizzaString) // transforma em objeto o que era string
    this.nomePizza = pizzaObjeto.nomePizza;
    this.descricaoPizza = pizzaObjeto.descricaoPizza;
    this.precoPizza = pizzaObjeto.precoPizza
    this.precoPizzaFixo = this.precoPizza

  }
  dividirPizza(btn){
    if (btn == '+'){
        this.qtdPizza++
        this.precoPizza =  (JSON.parse(this.precoPizzaFixo) / this.qtdPizza).toFixed(2)
    }else{
      if (this.qtdPizza != 1 ) {
      this.qtdPizza--
      this.precoPizza =  (JSON.parse(this.precoPizzaFixo) / this.qtdPizza).toFixed(2)

      }
    }
  }
  
}
