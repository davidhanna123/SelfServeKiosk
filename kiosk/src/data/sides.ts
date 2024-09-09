import { MenuItem } from './menuInterfaces';

export const sides: MenuItem[] = [
  // None
  {
    id: 43, // Continue ID from drinks items
    name: 'Fries',
    description: 'Crispy and golden French fries.',
    category: 'sides',
    subcategory: 'none',
    price: 1.99,
    calories: 300,
    image: 'fries.jpg',
    toppings: []
  },
  {
    id: 44,
    name: 'Loaded Fries',
    description: 'Fries topped with cheese, bacon, and sour cream.',
    category: 'sides',
    subcategory: 'none',
    price: 3.49,
    calories: 500,
    image: 'loaded_fries.jpg',
    toppings: []
  },
  {
    id: 45,
    name: 'Poutine',
    description: 'Fries topped with cheese curds and gravy.',
    category: 'sides',
    subcategory: 'none',
    price: 3.99,
    calories: 550,
    image: 'poutine.jpg',
    toppings: []
  },
  // Sandwich
  {
    id: 46,
    name: 'Grilled Chicken Wrap',
    description: 'Tender grilled chicken with fresh vegetables in a wrap.',
    category: 'sides',
    subcategory: 'sandwich',
    price: 4.99,
    calories: 400,
    image: 'grilled_chicken_wrap.jpg',
    toppings: []
  },
  {
    id: 47,
    name: 'Crispy Chicken Wrap',
    description: 'Crispy chicken with lettuce and sauce wrapped in a tortilla.',
    category: 'sides',
    subcategory: 'sandwich',
    price: 4.99,
    calories: 450,
    image: 'crispy_chicken_wrap.jpg',
    toppings: []
  }
];
