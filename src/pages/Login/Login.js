import React, { useState, useEffect } from 'react';
import './Login.css'
import { useUser } from '../../component/UserContext';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');  
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/login');
      setResponseData(response.data); // Set the response data to state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
        role,
      });

      // Assuming the response status for successful login is 200
      if (response.status === 200) {
        const user = {
          username,
          role,
        };
        console.log(responseData)
        // Store user information in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);

        // Redirect based on the user's role
        switch (role) {
          case 'customer':
            navigate('/Home');
            break;
          case 'manager':
            navigate('/StoreManagerHome');
            break;
          case 'retailer':
            navigate('/SalesHome');
            break;
          default:
            navigate('/Home'); // Default redirect
            break;
        }
      } else {
        // Handle login failure
        alert("Invalid credentials")
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      // alert("Invalid credentials")
    }
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div>
    <h2>Login Page</h2>
    <div>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </div>
    <div>
      <label>Role:</label>
      <select value={role} onChange={(e) => handleRoleChange(e.target.value)}>
        <option value="customer">User</option>
        <option value="manager">Sales Manager</option>
        <option value="retailer">Salesman</option>
      </select>
    </div>
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
    <div> 
    <p>Don't have an account? <Link to="/Registration">Register here</Link></p> 
  </div>
  </div>
  );
};

export default Login;