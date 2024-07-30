// Order.js
import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

function Order() {
  const { orders, cancelOrder } = useCart();
  console.log(orders);

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>You don't have any orders yet.</p>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h3>Order {index + 1}</h3>
              <p>Date: {order.date}</p>
              <table style={{ width: '100%', border: '2px solid #c8a2c8', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#e6ccff' }}>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>functions</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <td>{itemIndex + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td><button onClick={() => cancelOrder(index)}>Cancel Order</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Total: ${order.total}</p>
              <hr />
            </div>
          ))}
          <div style={{ marginTop: '10px', textAlign: 'right' }}>
            <Link to="/cart">
              <button>Go Back to Cart</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;
