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
    image: 'chocolate_brownie.jpg',
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
    image: 'ice_cream_sundae.jpg',
    toppings: ['Chocolate Syrup', 'Sprinkles', 'Whipped Cream']
  },
  {
    id: 25,
    name: 'Cone',
    description: 'Delicious cone with your choice of ice cream flavor.',
    category: 'dessert',
    subcategory: 'ice cream',
    price: 2.49,
    calories: 250,
    image: 'cone.jpg',
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
    image: 'chocolate_chip_cookie.jpg',
    toppings: []
  },
  {
    id: 27,
    name: 'Sugar Cookie',
    description: 'Sweet and buttery sugar cookie with a light crunch.',
    category: 'dessert',
    subcategory: 'none',
    price: 1.79,
    calories: 180,
    image: 'sugar_cookie.jpg',
    toppings: []
  }
];
