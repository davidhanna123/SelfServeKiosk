import { MenuItem } from './menuInterfaces';


export const chicken: MenuItem[] = [
  // Chicken Sandwiches
  {
    id: 11,
    name: 'Buffalo Chicken',
    description: 'Spicy buffalo chicken sandwich with lettuce and ranch.',
    category: 'chicken',
    subcategory: 'sandwich',
    price: 9.99,
    calories: 800,
    image: 'buffalo-chicken.jpg',
    toppings: ['Lettuce', 'Ranch', 'Buffalo Sauce']
  },
  {
    id: 12,
    name: 'BBQ Chicken',
    description: 'Grilled BBQ chicken sandwich with coleslaw.',
    category: 'chicken',
    subcategory: 'sandwich',
    price: 10.49,
    calories: 850,
    image: 'bbq-chicken.jpg',
    toppings: ['Coleslaw', 'BBQ Sauce', 'Pickles']
  },
  {
    id: 13,
    name: 'Curry Chicken',
    description: 'Chicken sandwich with a spicy curry sauce.',
    category: 'chicken',
    subcategory: 'sandwich',
    price: 10.99,
    calories: 900,
    image: 'curry-chicken.jpg',
    toppings: ['Lettuce', 'Curry Sauce', 'Tomato']
  },
  {
    id: 14,
    name: 'Crispy Chicken',
    description: 'Crispy fried chicken sandwich with mayo and pickles.',
    category: 'chicken',
    subcategory: 'sandwich',
    price: 9.49,
    calories: 950,
    image: 'crispy-chicken.jpg',
    toppings: ['Mayo', 'Pickles']
  },
  
  // Chicken Wings
  {
    id: 15,
    name: 'Tenders',
    description: 'Breaded chicken tenders with your choice of dipping sauce.',
    category: 'chicken',
    subcategory: 'wings',
    price: 8.99,
    calories: 700,
    image: 'tenders.jpg',
    toppings: ['Choice of Sauce']
  },
  {
    id: 16,
    name: 'Wings',
    description: 'Classic chicken wings with buffalo sauce.',
    category: 'chicken',
    subcategory: 'wings',
    price: 9.99,
    calories: 800,
    image: 'wings.jpg',
    toppings: ['Buffalo Sauce', 'Celery', 'Ranch']
  },
  {
    id: 17,
    name: 'Nuggets',
    description: 'Crispy chicken nuggets with honey mustard.',
    category: 'chicken',
    subcategory: 'wings',
    price: 7.99,
    calories: 600,
    image: 'nuggets.jpg',
    toppings: ['Honey Mustard', 'BBQ Sauce']
  }
];
