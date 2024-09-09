import { MenuItem } from './menuInterfaces';

// Condiments with 'none' subcategory
export const condiments: MenuItem[] = [
  {
    id: 18,
    name: 'Ketchup',
    description: 'Classic tomato ketchup.',
    category: 'condiments',
    subcategory: 'none',
    price: 0.00,  // Free
    calories: 20,
    image: 'ketchup.jpg',
    toppings: []
  },
  {
    id: 19,
    name: 'Mustard',
    description: 'Yellow mustard with a tangy flavor.',
    category: 'condiments',
    subcategory: 'none',
    price: 0.00,  // Free
    calories: 15,
    image: 'mustard.jpg',
    toppings: []
  },
  {
    id: 20,
    name: 'BBQ Sauce',
    description: 'Sweet and smoky BBQ sauce.',
    category: 'condiments',
    subcategory: 'none',
    price: 0.69,
    calories: 30,
    image: 'bbq-sauce.jpg',
    toppings: []
  },
  {
    id: 21,
    name: 'Buffalo Sauce',
    description: 'Spicy buffalo sauce with a kick.',
    category: 'condiments',
    subcategory: 'none',
    price: 0.69,
    calories: 25,
    image: 'buffalo-sauce.jpg',
    toppings: []
  },
  {
    id: 22,
    name: 'Gravy',
    description: 'Rich and savory gravy.',
    category: 'condiments',
    subcategory: 'none',
    price: 0.79,
    calories: 50,
    image: 'gravy.jpg',
    toppings: []
  }
];
