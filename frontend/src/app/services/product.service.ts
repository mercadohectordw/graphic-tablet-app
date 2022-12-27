import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api + 'products');
  }

  getProductById(id:number): Observable<Product>{
    return this.http.get<Product>(this.api + 'products/' + id);
  }
}
