import React from 'react'
import HomePage from './landing_pages/home/HomePage';
import AboutPage from './landing_pages/about/AboutPage'
import ProductPage from './landing_pages/products/ProductPage'
import PricePage from './landing_pages/pricing/PricePage'
import SupportPage from './landing_pages/support/SupportPage'
import NotFound from './landing_pages/comman/NotFound'
import Navbar from './landing_pages/comman/Navbar';
import { Routes,Route } from 'react-router-dom';
import Footer from './landing_pages/comman/Footer';
import SignUp from "./landing_pages/signup/SignUp"


const App = () =>{
return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricePage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
</>);
}

export default App;