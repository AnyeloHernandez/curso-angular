import { Component, HostBinding, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  productos: any = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe(
      res => {
        this.productos = res;
        console.log(this.productos);
      },
      err => console.log(err)
    );
  }

}
