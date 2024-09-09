export type SubItemType = 'extra' | 'flavor';

export interface SubItem {
  id: number;
  name: string;
  extraPrice: number;
  extraCalories: number;
  image: string;
  itemSubcategories: string[]; // List of subcategories where this sub-item is applicable
  type: SubItemType; // Type of addition method
  options?: string[]; // Options for 'flavor' type
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: 'beef' | 'chicken' | 'sides' | 'drinks' | 'dessert' | 'condiments';
  subcategory: 'sandwich' | 'wings' | 'coffee' | 'iced coffee' | 'fountain drink' | 'shakes' | 'ice cream' | 'none';
  price: number;
  calories: number;
  image: string;
  toppings: string[];
}

