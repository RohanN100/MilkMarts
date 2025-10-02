import { Link } from "react-router-dom";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

export default function Navbar({ cart, isLoggedIn, setIsLoggedIn }) {
  const [showModal, setShowModal] = useState(false);

  const handleLogoutConfirm = (reason) => {
    console.log("Logout reason:", reason);
    setIsLoggedIn(false); // ✅ Now this works
    alert("Logged out successfully!");
    setShowModal(false);
  };

  return (
    <div className="navbar">
      <h1>MilkMart 🥛</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/guarantee">Guarantee</Link>
        <Link to="/add-product">Add Product</Link>

        {isLoggedIn ? (
          <>
            <button onClick={() => setShowModal(true)} className="logout-btn">Logout</button>
            {showModal && (
              <LogoutModal
                onConfirm={handleLogoutConfirm}
                onCancel={() => setShowModal(false)}
              />
            )}
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}
