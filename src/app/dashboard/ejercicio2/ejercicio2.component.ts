import { Component } from '@angular/core';
import { ModuleModule } from '../../angular-module/module/module.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [ModuleModule, FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {


  resultado = "";

  ejercicio2 = {
    monto:null
  }

  calcular() {
    let monto = Number(this.ejercicio2.monto);
    let cuotas = 0;
    let interes = 0.0;
    let valorTotalDeuda = 0.0;
    let valorTotal = 0.0;

    if(monto < 1000) {
      interes = 0.12;
      cuotas = 1;
    }else if(monto <= 3000) {
      interes = 0.12;
      cuotas = 2;
    }else if (monto <= 3999){
      interes = 0.12;
      cuotas = 2;
    }else {
      interes = 0.10;
      cuotas = 2;
      if(monto > 5000) {
        cuotas = 3;
        interes = 0.10;
      }
    }

    valorTotalDeuda = monto + (monto * interes);
    valorTotal = valorTotalDeuda / cuotas;
    
    this.resultado = "Cantidad De Cuotas a Pagar : " + cuotas + ", Cada Cuota Por Pagar es : " + valorTotal;
  }
}
