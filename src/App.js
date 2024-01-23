import './App.css';

import React, { useState } from 'react';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <div>
      <h2>Register</h2>
      <Dasbord onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
        <br />
        <label>Name:</label>
        <input type="text" value={username} onChange={handleNameChange} required />
        <br />
        <button type="submit">Register</button>
        <button type="reset passward">reset</button>

      </Dasbord>
    </div>
  );
}

export default RegistrationForm;
