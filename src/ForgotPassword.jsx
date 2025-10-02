import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (!email) {
      alert("Please enter your email or phone number.");
      return;
    }
    // Simulate sending OTP
    alert("✅ OTP sent to your email/number: 123456");
    setOtpSent(true);
  };

  const handleResetPassword = () => {
    if (otp !== "123456") {
      alert("❌ Invalid OTP");
      return;
    }
    if (!newPassword) {
      alert("Please enter a new password.");
      return;
    }
    alert("✅ Password reset successful!");
    navigate("/login");
  };

  return (
    <div className="login-container">
      <h1>Forgot Password</h1>
      {!otpSent ? (
        <>
          <label>Email or Phone:</label>
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <label>Enter OTP:</label>
          <input 
            type="text" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)} 
          />

          <label>New Password:</label>
          <input 
            type="password" 
            value={newPassword} 
            onChange={(e) => setNewPassword(e.target.value)} 
          />

          <button onClick={handleResetPassword}>Reset Password</button>
        </>
      )}
    </div>
  );
}
