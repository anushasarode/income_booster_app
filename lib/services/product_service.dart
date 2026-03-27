import '../models/product_model.dart';

class ProductService {
  List<Product> getProducts() {
    return [
      Product(id: '1', name: 'Tomatoes', price: 30),
      Product(id: '2', name: 'Onions', price: 25),
      Product(id: '3', name: 'Potatoes', price: 20),
    ];
  }
}