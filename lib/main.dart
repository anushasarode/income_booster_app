import 'package:flutter/material.dart';
import 'screens/home/home_screen.dart';

void main() {
  runApp(const IncomeBoosterApp());
}

class IncomeBoosterApp extends StatelessWidget {
  const IncomeBoosterApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Income Booster',
      debugShowCheckedModeBanner: false,
      home: const HomeScreen(),
    );
  }
}