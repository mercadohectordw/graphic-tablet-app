import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():Product[]{
    return [
      {
        id:1,
        name:"Tablet Huion",
        description: "asdfad",
        price: 15000.50,
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_938482-MLA32157846574_092019-O.jpg"
      },
      {
        id:2,
        name:"Monitor grafico Huion",
        description: "asdfad",
        price: 150000.00,
        imageUrl: "https://www.huion.com/uploadfile/image/20200612/1591959458800989.png"
      },
    ]
  }
}
