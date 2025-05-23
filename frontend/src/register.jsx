import React, { useState } from 'react';
import axios from 'axios';
import './register.css';

const Register = () => {
  const [tab, setTab] = useState('authority');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    code: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setMessage('');

  if (!formData.name || !formData.email || !formData.password || !formData.code) {
    setError('Please fill out all fields');
    return;
  }

  try {
    // Send role as part of formData:
    const res = await axios.post('http://localhost:5000/register', {
      ...formData,
      role: tab // add role from current tab ('authority' or 'patient')
    });
    setMessage(res.data.message);
    setFormData({ name: '', email: '', code: '', password: '' });
  } catch (err) {
    setError(err.response?.data?.message || 'Registration failed');
  }
};


  return (
    <div className="register-page">
      <div className="animated-bg">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>

      <div className="tab-buttons">
        <button onClick={() => setTab('authority')} className={tab === 'authority' ? 'active' : ''}>Authority</button>
        <button onClick={() => setTab('patient')} className={tab === 'patient' ? 'active' : ''}>Patient</button>
      </div>

      <div className="register-card">
        <h2>{tab === 'authority' ? 'Authority Registration' : 'Patient Registration'}</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name" required />
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" required />
          {tab === 'authority' && <input name="code" value={formData.code} onChange={handleChange} type="text" placeholder="Authority Code" required />}
          {tab === 'patient' && <input name="code" value={formData.code} onChange={handleChange} type="text" placeholder="Patient ID or DOB" required />}
          <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" required />
          {error && <p className="error-text">{error}</p>}
          {message && <p className="success-text">{message}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;