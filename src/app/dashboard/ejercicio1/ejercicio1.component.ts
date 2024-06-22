import { Component } from '@angular/core';
import { ModuleModule } from '../../angular-module/module/module.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [ModuleModule, FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {

  ejercicio1 = {
    precio : null,
    cantidad : null
  }
  
  resultado = "";

  calcular() {
    let precio = Number(this.ejercicio1.precio);
    let cantidad = Number(this.ejercicio1.cantidad);
    let importePagar = 0.0;
    let importeDescuento = 0.0;
    if(precio > 200) {
      importePagar = cantidad * precio;
      importeDescuento = importePagar - (importePagar * 0.20);
    }else {
      importePagar = cantidad * precio;
      importeDescuento = importePagar;
    }
    
    this.resultado = "El Importe Total es: " + importeDescuento;
  }
}
