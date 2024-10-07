import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  calories: number;
  notes: string;
  quantity: number; 
}

interface CartContextProps {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: string, notes: string) => void; 
  calculateTotalPrice: () => number; 
  calculateTotalCalories: () => number; 
  clearCart: () => void;
}
const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (newItem: CartItem) => {
    setCartItems(prevCart => {
      const existingItem = prevCart.find(
        cartItem => cartItem.id === newItem.id && cartItem.notes === newItem.notes
      );

      if (existingItem) {
        // If the item with the same id and notes exists, increase its quantity
        return prevCart.map(cartItem =>
          cartItem.id === newItem.id && cartItem.notes === newItem.notes
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      
      return [...prevCart, { ...newItem, quantity: 1 }];
    });
  };

  const removeItemFromCart = (id: string, notes: string) => {
    setCartItems(prevCart => prevCart.filter(item => !(item.id === id && item.notes === notes)));
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  const calculateTotalCalories = () => {
    return cartItems.reduce((total, item) => total + item.calories * item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]); 
  };
  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, calculateTotalPrice, calculateTotalCalories, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
