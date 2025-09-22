import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import Guarantee from "./Guarantee";  // ✅ import Guarantee page
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
        <Route path="/guarantee" element={<Guarantee />} /> {/* ✅ New Route */}
      </Routes>
    </Router>
  );
}
