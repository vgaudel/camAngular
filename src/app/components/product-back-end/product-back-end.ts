import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { IProduct } from '../../model/IProduct';
import { CommonModule } from '@angular/common';
import { Product } from "./product/product";

@Component({
  selector: 'app-product-back-end',
  imports: [CommonModule, Product],
  templateUrl: './product-back-end.html',
  styleUrl: './product-back-end.scss',
})
export class ProductBackEnd implements OnInit {

  private productService = inject(ProductService)

  products: WritableSignal<IProduct[]> = signal([]);

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(): void {
    this.productService.getAllProducts$().subscribe({
      next: (productsFromBack) => {
        this.products.set(productsFromBack);
        console.log(this.products);
      },
      error: (error) => console.log(error)
    });
  }

}
