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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-firecracker-mccrispy-1:nutrition-calculator-tile',
    toppings: ['Lettuce', 'Ranch', 'Buffalo Sauce']
  },
  {
    id: 12,
    name: 'BBQ Chicken Wrap',
    description: 'Grilled BBQ chicken wrap with coleslaw.',
    category: 'chicken',
    subcategory: 'sandwich',
    price: 10.49,
    calories: 850,
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-spicybuffalo-snackwrap-crispy-1:nutrition-calculator-tile',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-chicken-mcgriddle:nutrition-calculator-tile',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-mccrispy-1:nutrition-calculator-tile',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcd-3pc-Chicken_Tenders--uae-1223:product-header-desktop?wid=829&hei=455&dpr=off',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcd-McWings-uae1223:product-header-desktop?wid=829&hei=455&dpr=off',
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
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-4-chicken-mcnuggets-1:nutrition-calculator-tile',
    toppings: ['Honey Mustard', 'BBQ Sauce']
  }
];
