import 'package:flutter/material.dart';
import '../../services/product_service.dart';
import '../../models/product_model.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final products = ProductService().getProducts();

    return Scaffold(
      appBar: AppBar(title: const Text("Marketplace")),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context, index) {
          Product product = products[index];

          return Card(
            child: ListTile(
              title: Text(product.name),
              subtitle: Text("₹${product.price}"),
              trailing: ElevatedButton(
                onPressed: () {},
                child: const Text("Buy"),
              ),
            ),
          );
        },
      ),
    );
  }
}