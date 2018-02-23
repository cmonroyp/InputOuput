import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  @Input() recibeSaludoPadre: string;  
  @Output()  sumaNumeros: EventEmitter<number> = new EventEmitter();

  numero1:number;
  numero2:number;

  constructor() { }
  ngOnInit() {

  }

  onsubmit(){
    let suma:number = this.numero1 + this.numero2;
    this.sumaNumeros.emit(suma);
  }

}
