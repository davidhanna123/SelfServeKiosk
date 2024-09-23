import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';


import Homepage from './pages/Homepage'
import SelectPage from './pages/SelectPage'
import OrderPage from './pages/OrderPage'
import PaymentPage from './pages/PaymentPage'

import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/SelectPage" element={<SelectPage />} />
            
            <Route path="/OrderPage" element={<OrderPage />} />
            <Route path="/PaymentPage" element={<PaymentPage />} />
            
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App
