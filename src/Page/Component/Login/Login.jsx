import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling

export default function Login() {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");

  const submitThis = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const info = { email: email, passw: passw };
    setDataInput([info]);
  }

  return (
    <div className='login-maincontainer'>
      <div className="login-container">
      <form onSubmit={submitThis}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="passw">Password</label>
          <input type="password" name="passw" id="passw" value={passw} onChange={(e) => setPassw(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}
