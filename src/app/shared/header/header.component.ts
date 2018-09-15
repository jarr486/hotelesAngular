import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  btnIniciarSesion:string;
  
  constructor() {
    
    this.btnIniciarSesion="Inciar Sesion";
    
  }

  ngOnInit() {
  }

}
