import { MenuItem } from './menuInterfaces';

export const dessert: MenuItem[] = [
  {
    id: 23, 
    name: 'Chocolate Brownie',
    description: 'Rich and fudgy chocolate brownie.',
    category: 'dessert',
    subcategory: 'none',
    price: 2.49,
    calories: 350,
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-rmhc-brownie-cookie:nutrition-calculator-tile',
    toppings: []
  },
  {
    id: 24,
    name: 'Ice Cream Sundae',
    description: 'Classic sundae with choice of toppings.',
    category: 'dessert',
    subcategory: 'ice cream',
    price: 3.99,
    calories: 400,
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-hot-fudge-sundae:nutrition-calculator-tile',
    toppings: ['Chocolate Syrup', 'Sprinkles', 'Whipped Cream']
  },
  {
    id: 25,
    name: 'Ice Cream Cone',
    description: 'Delicious cone with your choice of ice cream flavor.',
    category: 'dessert',
    subcategory: 'ice cream',
    price: 2.49,
    calories: 250,
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-vanilla-cone:nutrition-calculator-tile',
    toppings: []
  },
  {
    id: 26,
    name: 'Chocolate Chip Cookie',
    description: 'Classic chocolate chip cookie with gooey chocolate chips.',
    category: 'dessert',
    subcategory: 'none',
    price: 1.99,
    calories: 200,
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-rmhc-chocolate-chunk-cookie:nutrition-calculator-tile',
    toppings: []
  },
  
  
];
