import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home({ cart, setCart, isLoggedIn, products }) {
  const navigate = useNavigate();

  const addToCart = (product) => {
    if (!isLoggedIn) {
      alert("Please login to add items to cart.");
      navigate("/login");
      return;
    }
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <div className="products-container">
        {products.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>No products available.</p>
        ) : (
          products.map((p) => (
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
          ))
        )}
      </div>
    </div>
  );
}
