import React, { useState } from "react";

export default function LogoutModal({ onConfirm, onCancel }) {
  const [selectedReason, setSelectedReason] = useState("");

  const reasons = [
    "Just browsing, not ready to buy",
    "Found a better alternative",
    "Site is slow or buggy",
    "Concerned about privacy",
    "Other personal reason"
  ];

  const handleSubmit = () => {
    if (!selectedReason) {
      alert("Please select a reason before logging out.");
      return;
    }
    onConfirm(selectedReason);
  };

  return (
    <div className="logout-modal">
      <div className="modal-content">
        <h2>Why are you logging out?</h2>
        {reasons.map((reason, index) => (
          <label key={index} style={{ display: "block", marginBottom: "8px" }}>
            <input
              type="radio"
              name="logoutReason"
              value={reason}
              checked={selectedReason === reason}
              onChange={(e) => setSelectedReason(e.target.value)}
            />
            {reason}
          </label>
        ))}
        <div style={{ marginTop: "15px" }}>
          <button onClick={handleSubmit}>Confirm Logout</button>
          <button onClick={onCancel} style={{ marginLeft: "10px" }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
