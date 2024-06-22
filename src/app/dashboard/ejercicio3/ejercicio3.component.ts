import { Component } from '@angular/core';
import { ModuleModule } from '../../angular-module/module/module.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [ModuleModule, FormsModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {

  ejercicio3 = {
    monto: null
  }

  resultado = "";

  calcular() {
    let monto = Number(this.ejercicio3.monto);
    let interes = 0.0;
    let valorTotalDeudaInteres = 0.0;
    
    if(monto < 4000) {
      interes = 0.12;
    }else {
      interes = 0.10;
    }

    valorTotalDeudaInteres = monto + (monto * interes);
    this.resultado = "La Deuda Total es : " + valorTotalDeudaInteres;
  }
}
