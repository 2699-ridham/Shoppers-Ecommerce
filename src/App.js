import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import About from './Components/About';
import Login from './Components/Login';
import SingleProductPage from './Components/SingleProductPage';
import Cart from './Components/Cart';
import Register from './Components/Register';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import Checkout from './Components/Checkout';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/Login-page' element={<Login />} />
        <Route path='/product/:id' element={<SingleProductPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='/payment-page' element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
