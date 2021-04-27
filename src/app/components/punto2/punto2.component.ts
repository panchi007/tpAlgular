import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

 asistente: Array<any>;

  usuario: string
  nombreOrganizacion: string
  solicitaConstancia: boolean;





  registrarce() {
    console.log(this.usuario,this.nombreOrganizacion,this.solicitaConstancia);
    this.asistente.push({ usuario: this.usuario , nombreOrganizacion: this.nombreOrganizacion , solicitaConstancia: this.solicitaConstancia});
    return false;
  }



  constructor() {


    this.asistente = [

      { "usuario" :"mamani",
        "nombreOrganizacion" : "sanlorenzo",
        "solicitaConstancia" : "true"


      }
    ] 


   }

  ngOnInit(): void {
  }

}
