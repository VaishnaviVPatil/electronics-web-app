import React, { useState } from 'react';
import './Registration.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    usertype: 'customer', // Default usertype
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log(formData)
    try {
      // Make a POST request to the registration API
      const response = await axios.post('http://localhost:3001/register', {
        username: formData.username,
        password: formData.password,
        role: formData.usertype, // Pass usertype as role
      });

      // Check for a successful registration response
      if (response.status === 201) {
        alert('Registration successful!');
        navigate('/Login');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <div>
          <label>User Type:</label>
          <select name="usertype" value={formData.usertype} onChange={handleChange}>
          <option value="customer">User</option>
          <option value="manager">Sales Manager</option>
          <option value="retailer">Salesman</option>
          </select>
        </div>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
