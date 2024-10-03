import { MenuItem } from './menuInterfaces';

export const sides: MenuItem[] = [
  
  {
    id: 43, 
    name: 'Fries',
    description: 'Crispy and golden French fries.',
    category: 'sides',
    subcategory: 'none',
    price: 1.99,
    calories: 300,
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-fries-medium:product-header-desktop?wid=829&hei=455&dpr=off',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-spicy-crispy-buffalo-poutine:product-header-desktop?wid=829&hei=455&dpr=off',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-poutine:product-header-desktop?wid=829&hei=455&dpr=off',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Grilled-Chicken-Wrap:product-header-desktop?wid=830&hei=456&dpr=off',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-chickenbacon-mcwrap-grilled:nutrition-calculator-tile',
    toppings: []
  }
];
