import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: []
})
export class PadreComponent implements OnInit {

  sumatoriaHijo:string;//
  saludo_padre:string;//dato enviado al componente hijo

  constructor() { }

  ngOnInit() {
  }

  updateFromChild(event){
    this.sumatoriaHijo= event;
  }
}
