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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Tangy-Tomato-Dip-1:product-header-desktop?wid=829&hei=455&dpr=off',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Butter-Portion:product-header-desktop?wid=829&hei=455&dpr=off',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-BBQ-Dip-30g-5:product-header-desktop?wid=829&hei=455&dpr=off',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Sweet-Chilli-Dip-may-promo:product-header-desktop?wid=829&hei=455&dpr=off',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Balsamic-Dressing-30g:product-header-desktop?wid=829&hei=455&dpr=off',
    toppings: []
  }
];
