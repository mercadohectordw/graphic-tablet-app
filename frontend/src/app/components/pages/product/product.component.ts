import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  producto: Product = new Product;

  constructor(private productService: ProductService, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");

    this.productService.getProductById(Number(id)).subscribe((res:any) => {
      this.producto = res;
    });
  }

}
