import './App.css'
//import './index.css'

import { BrowserRouter, Route,Routes } from 'react-router-dom';


import Homepage from './pages/Homepage'
import SelectPage from './pages/SelectPage'
import OrderPage from './pages/OrderPage'
import PaymentPage from './pages/PaymentPage'

import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App
