import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private readonly apiUrl = 'http://localhost:3000/products';
  private http =inject(HttpClient);

  getAllProducts$(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.apiUrl);
  }
  
  getProductById$(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }

  getProductByName$(name: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/name/${name}`);
  }

  getProductsByCategory$(category: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}/category/${category}`);
  }
  
  getProductsCategories$(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  productExists$(name: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${name}`);
  }

  countProducts$(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count/total`);
  }

  createProduct$(product: Omit<IProduct, 'id'>): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiUrl, product);
  }

  updateProduct$(id: string, product: Omit<IProduct, 'id'>): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.apiUrl}/${id}`, product);
  }

  deleteProductById$(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  deleteProductByName$(name: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/name/${name}`);
  }

}
