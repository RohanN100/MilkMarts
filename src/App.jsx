import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AddProduct from "./AddProduct";
import Cart from "./Cart";
import Login from "./Login";
import Footer from "./Footer";
import Guarantee from "./Guarantee";
import "./App.css";
import ProductDetails from "./ProductDetails";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <Router>
      <div className="app-layout">
        <Navbar
          cart={cart}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn} // ✅ FIXED: pass this to Navbar
        />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  cart={cart}
                  setCart={setCart}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route path="/add-product" element={<AddProduct setProducts={setProducts} />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route
  path="/product/:id"
  element={
    <ProductDetails
      products={products}
      cart={cart}
      setCart={setCart}
      isLoggedIn={isLoggedIn}
    />
  }
/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
