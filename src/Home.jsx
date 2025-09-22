import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ cart, setCart, showGuarantee }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      {/* Products Grid */}
      <div className="products-container">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <Link to={`/product/${p.id}`}>
              <img src={p.image} alt={p.name} />
            </Link>
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Guarantee Section (only visible if showGuarantee is true) */}
      {showGuarantee && (
        <div className="guarantee-section">
          <h2>✅ Our Guarantee</h2>
          <ul>
            <li>🥛 100% Fresh & Pure Dairy Products</li>
            <li>🚚 Free Delivery within 24 Hours</li>
            <li>🌱 No Preservatives or Chemicals</li>
            <li>🏭 Direct from Farm to Your Home</li>
            <li>💯 Satisfaction Guaranteed</li>
          </ul>
        </div>
      )}
    </div>
  );
}
