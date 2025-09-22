import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !contact) {
      alert("Please fill in all fields");
      return;
    }
    alert(`✅ Order placed!\nName: ${name}\nAddress: ${address}\nContact: ${contact}`);
    setName("");
    setAddress("");
    setContact("");
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your cart is empty</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <p><b>{item.name}</b> - ₹{item.price}</p>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>

      <form className="cart-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Address:</label>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows="3" />

        <label>Contact Number:</label>
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />

        <button className="place-order-btn" type="submit">
          Place Order
        </button>
      </form>

      <div style={{ marginTop: "15px" }}>
        <Link to="/">← Continue Shopping</Link>
      </div>
    </div>
  );
}
