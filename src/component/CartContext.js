// CartContext.js

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const placeOrder = () => {
    // Assuming order has a structure with date and total properties
    const order = {
      date: new Date().toLocaleDateString(),
      total: calculateTotal(),
      items: [...cartItems], // Copy the cart items to the order
    };

    setOrders([...orders, order]);
    setCartItems([]); // Clear the cart after placing the order
  };

  const cancelOrder = (orderIndex) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(orderIndex, 1);
    setOrders(updatedOrders);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const value = {
    cartItems,
    orders,
    addToCart,
    removeFromCart,
    placeOrder,
    setCartItems,
    cancelOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
