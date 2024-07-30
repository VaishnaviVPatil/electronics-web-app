import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const handleRemoveItem = (index) => {
    // Use the correct function name: removeFromCart
    removeFromCart(index);
  };  

  return ( 
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table style={{ width: '100%', border: '2px solid #c8a2c8', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#e6ccff' }}>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th> {/* Added a new column for the remove button */}
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: '10px', textAlign: 'right' }}>
            <b>Total: ${calculateTotal()}</b>
            <br />
            <Link to={'/checkout'}>
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
