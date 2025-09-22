import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  return (
    <div className="navbar">
      <h1>MilkMart 🥛</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/guarantee">Guarantee</Link>
      </div>
    </div>
  );
}
