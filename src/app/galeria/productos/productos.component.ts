import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private route:Router) {
   }

  ngOnInit(): void {
  }

  mostrarProd(valor:string){
    this.route.navigate(['productos/prod1']);
  }
  mostrarProd2 (valor:string) {
    this.route.navigate(['productos/prod2']);
  }

}
