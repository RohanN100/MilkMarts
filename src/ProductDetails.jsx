import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function ProductDetails({ products, cart, setCart, isLoggedIn }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <p style={{ textAlign: "center", marginTop: "20px" }}>Product not found.</p>;

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      alert("Please login to add items to cart.");
      navigate("/login");
      return;
    }
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="cart-container">
      <Link to="/">← Back to Home</Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "12px" }} />
      <p style={{ fontSize: "18px", margin: "10px 0" }}>Price: ₹{product.price}</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
