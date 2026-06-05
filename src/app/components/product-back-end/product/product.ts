import { Component, input } from '@angular/core';
import { IProduct } from '../../../model/IProduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {

  product = input.required<IProduct>();

}
