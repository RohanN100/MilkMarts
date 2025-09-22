import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails({ cart, setCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
      })
      .catch((err) => console.error("Error loading product:", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
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
