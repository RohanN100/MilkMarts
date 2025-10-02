import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct({ setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !image) {
      alert("Please fill in all required fields.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      image,
      description
    };

    setProducts((prev) => [...prev, newProduct]);
    alert("✅ Product added successfully!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Price (₹):</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label>Image URL:</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} />

        <label>Description (optional):</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <button type="submit" style={{ marginTop: "15px" }}>Add Product</button>
      </form>
    </div>
  );
}
