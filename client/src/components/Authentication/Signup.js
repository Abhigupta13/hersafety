import React, { useState } from 'react';
import './style.css';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Send signup data to server
    }
  
    return (
      <div className="signup">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }