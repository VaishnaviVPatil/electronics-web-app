import React, { useState } from 'react';
import axios from 'axios';

function DeleteOrder() {
  const [orderId, setOrderId] = useState('');
  const [customerUsername, setCustomerUsername] = useState('');
  const [isOrderDeleted, setOrderDeleted] = useState(false);

  const handleOrderIdChange = (e) => {
    setOrderId(parseInt(e.target.value, 10));
  };

  const handleCustomerUsernameChange = (e) => {
    setCustomerUsername(e.target.value);
  };

  const handleDeleteOrder = () => { 
    try { 
      axios.post('http://localhost:3001/orders/deleteOrder', {
        orderId: orderId,
        userName: customerUsername,
      });

      // For simplicity, we're just setting a flag to indicate the order has been deleted
      setOrderDeleted(true);
    } catch (error) {
      console.error('Error deleting order:', error);
      // Handle errors here
    }
  };

  return (
    <div>
      {!isOrderDeleted && (
        <>
          <h2>Delete Order</h2>
          <div>
            <label>Order ID:</label>
            <input type="text" value={orderId} onChange={handleOrderIdChange} />
          </div>
          <div>
            <label>Customer Username:</label>
            <input type="text" value={customerUsername} onChange={handleCustomerUsernameChange} />
          </div>
          <button onClick={handleDeleteOrder}>Delete Order</button>
        </>
      )}
      {isOrderDeleted && <h3>Order Deleted Successfully!!</h3>}
    </div>
  );
}

export default DeleteOrder;
