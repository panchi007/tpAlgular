import { Component, OnInit } from '@angular/core';
import { ParaPunto3Service } from './../../services/para-punto3.service'
import { Punto3 } from 'src/app/models/punto3';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {


  venta: Punto3;
  vector_ventas: Array<Punto3>;
  precio_descuento: number = 0;
  show: boolean = false;


  constructor(private ventasservice: ParaPunto3Service) {
    this.venta = new Punto3();
    this.vector_ventas = new Array<Punto3>();
    this.listVenta();
  }

  onSubmit(f) {
    console.log(f.value);
  }

  public calcularDescuento() {
    if (this.venta.categoriapasajero == 'm') {
      this.precio_descuento = (this.venta.precio * 25) / 100;
      this.show = true;
    }
    if (this.venta.categoriapasajero == 'j') {
      this.precio_descuento = (this.venta.precio * 50) / 100;
      this.show = true;
    }
  }
  public saveVenta() {
    this.venta.fechacompra = new Date();
    this.ventasservice.saveVenta(this.venta);
    this.venta = new Punto3();
    this.precio_descuento = 0;
    this.show = false;
  }

  public listVenta() {
    this.vector_ventas = this.ventasservice.listVenta();
  }



  ngOnInit(): void {
  }




}


