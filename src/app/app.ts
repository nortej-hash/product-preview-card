import { Component } from '@angular/core';
import { ProductCardComponent, Product } from './product-card/product-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  perfumeData: Product = {
    category: 'Perfume',
    title: 'Gabrielle Essence Eau De Parfum',
    description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    currentPrice: 149,
    originalPrice: 169,
    desktopImage: 'https://raw.githubusercontent.com/frontend-mentor-challenges/product-preview-card-component/main/images/image-product-desktop.jpg',
    mobileImage: 'https://raw.githubusercontent.com/frontend-mentor-challenges/product-preview-card-component/main/images/image-product-mobile.jpg'
  };

  handleAddToCart(product: Product): void {
    alert(`Added ${product.title} to cart!`);
  }
}