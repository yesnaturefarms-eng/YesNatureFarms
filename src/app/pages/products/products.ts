import { Component } from '@angular/core';
import { ProductsService } from '../../service/products';
import { Product } from '../../shared/models/products.model';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-products',
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, MatChipsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory = 'all';

  categories = [
    { name: 'All', value: 'all' },
    { name: 'Greenhouse Products', value: 'greenhouse products' },
    { name: 'Other Products', value: 'other products' },
  ];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProducts =
      category === 'all' ? this.products : this.products.filter((p) => p.category === category);
  }
}
