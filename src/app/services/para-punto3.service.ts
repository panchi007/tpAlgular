import { Injectable } from '@angular/core';
import { Punto3 } from './../models/punto3'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParaPunto3Service {


  vector_ventas: Array<Punto3>;



  constructor() {

    this.vector_ventas = new Array<Punto3>();
   
    

  }

 

  listVenta() {
    return this.vector_ventas;
  }

  saveVenta(venta: Punto3) {
    this.vector_ventas.push(venta);
  }

  updateVenta(venta: Punto3) {

  }

  deleteVenta(idventa: number) {

  }



}

