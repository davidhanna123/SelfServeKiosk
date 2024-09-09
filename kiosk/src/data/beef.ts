import { MenuItem } from './menuInterfaces';

export const beef: MenuItem[] = [
  {
    id: 1,
    name: 'Burger',
    description: 'A classic beef burger with lettuce, tomato, and pickles.',
    category: 'beef',
    subcategory: 'sandwich',
    price: 8.99,
    calories: 750,
    image: 'burger.jpg',
    toppings: ['Lettuce', 'Tomato', 'Pickles', 'Onions']
  },
  {
    id: 2,
    name: 'Cheeseburger',
    description: 'A beef burger with melted cheddar cheese.',
    category: 'beef',
    subcategory: 'sandwich',
    price: 9.49,
    calories: 850,
    image: 'cheeseburger.jpg',
    toppings: ['Lettuce', 'Tomato', 'Pickles', 'Cheddar Cheese', 'Onions']
  },
  {
    id: 3,
    name: 'Double Cheese Burger',
    description: 'A double beef patty burger with double cheddar cheese.',
    category: 'beef',
    subcategory: 'sandwich',
    price: 10.99,
    calories: 1100,
    image: 'double-cheese-burger.jpg',
    toppings: ['Lettuce', 'Tomato', 'Pickles', 'Double Cheddar Cheese', 'Onions']
  },
  {
    id: 4,
    name: 'Big Angus',
    description: 'A hearty Angus beef burger with bacon and BBQ sauce.',
    category: 'beef',
    subcategory: 'sandwich',
    price: 11.49,
    calories: 1200,
    image: 'big-angus.jpg',
    toppings: ['Lettuce', 'Tomato', 'Pickles', 'Angus Beef Patty', 'Bacon', 'BBQ Sauce']
  },
  {
    id: 5,
    name: 'Texas BBQ',
    description: 'A spicy beef burger with BBQ sauce and jalapeños.',
    category: 'beef',
    subcategory: 'sandwich',
    price: 10.49,
    calories: 950,
    image: 'texas-bbq.jpg',
    toppings: ['Lettuce', 'Tomato', 'Pickles', 'Beef Patty', 'BBQ Sauce', 'Jalapeños']
  }
  // Add more beef items here if needed...
];
