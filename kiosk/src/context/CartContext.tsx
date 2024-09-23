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

      // Otherwise, add new item with quantity 1
      return [...prevCart, { ...newItem, quantity: 1 }];
    });
  };

  const removeItemFromCart = (id: string, notes: string) => {
    setCartItems(prevCart => prevCart.filter(item => !(item.id === id && item.notes === notes)));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
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
