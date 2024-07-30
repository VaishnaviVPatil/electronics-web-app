import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SalesHome() {
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [role, setRole] = useState('customer');
  const [isCustomerAdded, setCustomerAdded] = useState(false);

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleAddCustomer = async () => {
    try {
      const response = await axios.post('http://localhost:3001/register', {
        username: customerId,
        password: customerName, // You might want to use a default password or have a field for it
        role: role,
      });

      if (response.status === 201) {
        setCustomerAdded(true);
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
      <h2>Sales Home</h2>
      <div>
        <h3>Create Customer Account</h3>
        <div>
          <label>Customer Username:</label>
          <input type="text" value={customerId} onChange={handleCustomerIdChange} />
        </div>
        <div>
          <label>Customer Password:</label>
          <input type="text" value={customerName} onChange={handleCustomerNameChange} />
        </div>
        <div>
          <label>User Type:</label>
          <select name="usertype" value={role} onChange={handleRoleChange}>
            <option value="customer">User</option>
            <option value="manager">Sales Manager</option>
            <option value="retailer">Salesman</option>
          </select>
        </div>
        <button onClick={handleAddCustomer}>Create Customer Account</button>
      </div>
      {isCustomerAdded && (
        <div style={{ marginTop: '20px' }}>
          <h3>Customer Account Created Successfully!!</h3>
        </div>
      )}

      <div style={{ marginTop: '20px' }}> 
        <h3>Manage Customer Orders</h3>
        <Link to="/AddOrder">
          <button>Add Customer Order</button>
        </Link>
        <Link to="/DeleteOrder">
          <button>Delete Customer Orders</button>
        </Link> 
        <Link to="/UpdateOrder">
          <button>Update Customer Orders</button>
        </Link> 
      </div>

      
    </div>
  );
}

export default SalesHome;

