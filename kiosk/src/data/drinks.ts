import { MenuItem } from './menuInterfaces';

export const drinks: MenuItem[] = [
  // Coffee
  {
    id: 28, // Start ID from 28, following dessert items
    name: 'Premium Roast Coffee',
    description: 'Rich and full-bodied premium roast coffee.',
    category: 'drinks',
    subcategory: 'coffee',
    price: 2.49,
    calories: 5,
    image: 'premium_roast_coffee.jpg',
    toppings: []
  },
  {
    id: 29,
    name: 'Premium Roast Decaf Coffee',
    description: 'Smooth decaffeinated coffee with rich flavor.',
    category: 'drinks',
    subcategory: 'coffee',
    price: 2.49,
    calories: 5,
    image: 'premium_roast_decaf_coffee.jpg',
    toppings: []
  },
  // Iced Coffee
  {
    id: 30,
    name: 'Regular Iced Coffee',
    description: 'Chilled coffee with a refreshing taste.',
    category: 'drinks',
    subcategory: 'iced coffee',
    price: 2.99,
    calories: 100,
    image: 'regular_iced_coffee.jpg',
    toppings: []
  },
  {
    id: 31,
    name: 'Caramel Iced Coffee',
    description: 'Iced coffee with a rich caramel flavor.',
    category: 'drinks',
    subcategory: 'iced coffee',
    price: 3.49,
    calories: 120,
    image: 'caramel_iced_coffee.jpg',
    toppings: []
  },
  {
    id: 32,
    name: 'Vanilla Iced Coffee',
    description: 'Iced coffee with a hint of vanilla sweetness.',
    category: 'drinks',
    subcategory: 'iced coffee',
    price: 3.49,
    calories: 110,
    image: 'vanilla_iced_coffee.jpg',
    toppings: []
  },
  // Fountain Drink
  {
    id: 33,
    name: 'Coke',
    description: 'Classic Coca-Cola soda.',
    category: 'drinks',
    subcategory: 'fountain drink',
    price: 1.99,
    calories: 150,
    image: 'coke.jpg',
    toppings: []
  },
  {
    id: 34,
    name: 'Diet Coke',
    description: 'Diet version of Coca-Cola with no sugar.',
    category: 'drinks',
    subcategory: 'fountain drink',
    price: 1.99,
    calories: 0,
    image: 'diet_coke.jpg',
    toppings: []
  },
  {
    id: 35,
    name: 'Sprite',
    description: 'Lemon-lime soda with a refreshing taste.',
    category: 'drinks',
    subcategory: 'fountain drink',
    price: 1.99,
    calories: 140,
    image: 'sprite.jpg',
    toppings: []
  },
  {
    id: 36,
    name: 'Fanta',
    description: 'Fruit-flavored soda with a bold taste.',
    category: 'drinks',
    subcategory: 'fountain drink',
    price: 1.99,
    calories: 160,
    image: 'fanta.jpg',
    toppings: []
  },
  {
    id: 37,
    name: 'Orange Juice',
    description: 'Freshly squeezed orange juice.',
    category: 'drinks',
    subcategory: 'fountain drink',
    price: 2.49,
    calories: 120,
    image: 'orange_juice.jpg',
    toppings: []
  },
  {
    id: 38,
    name: 'Apple Juice',
    description: 'Refreshing apple juice.',
    category: 'drinks',
    subcategory: 'fountain drink',
    price: 2.49,
    calories: 110,
    image: 'apple_juice.jpg',
    toppings: []
  },
  {
    id: 39,
    name: 'Iced Tea',
    description: 'Chilled tea with a hint of lemon.',
    category: 'drinks',
    subcategory: 'fountain drink',
    price: 1.99,
    calories: 70,
    image: 'iced_tea.jpg',
    toppings: []
  },
  // Shake
  {
    id: 40,
    name: 'Vanilla Shake',
    description: 'Creamy vanilla shake with a rich flavor.',
    category: 'drinks',
    subcategory: 'shakes',
    price: 3.99,
    calories: 350,
    image: 'vanilla_shake.jpg',
    toppings: []
  },
  {
    id: 41,
    name: 'Chocolate Shake',
    description: 'Rich chocolate shake with a smooth texture.',
    category: 'drinks',
    subcategory: 'shakes',
    price: 3.99,
    calories: 400,
    image: 'chocolate_shake.jpg',
    toppings: []
  },
  {
    id: 42,
    name: 'Strawberry Shake',
    description: 'Sweet and fruity strawberry shake.',
    category: 'drinks',
    subcategory: 'shakes',
    price: 3.99,
    calories: 360,
    image: 'strawberry_shake.jpg',
    toppings: []
  }
];
