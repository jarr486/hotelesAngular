import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Declarar variables
  btnIniciarSesion:string;
  btnHoteles:string;
  
  btnCategorias:Array<string>;
  
  constructor() {
    
    //Inicializo
    this.btnIniciarSesion="Inciar Sesion";
    this.btnHoteles ="Tipos Hoteles";
    
    this.btnCategorias = [
         'Una Estrellas',
         'Dos Estrellas',
         'Tres Estrellas',
         'Cuatro Estrellas',
         'Cinco Estrellas'
    ];
    
  }

  ngOnInit() {
  }

}
