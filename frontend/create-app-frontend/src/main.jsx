import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./landing_page/sign_up/Signup";
import HomePage from './landing_page/Home/Homepage';
import AboutPage from './landing_page/About/AboutPage';
import ProductPage from './landing_page/Product/Productpage';
import SupportPage from './landing_page/Support/Supportpage';
import PricingPage from './landing_page/Pricing/Pricingpage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from "./landing_page/NotFound";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
)