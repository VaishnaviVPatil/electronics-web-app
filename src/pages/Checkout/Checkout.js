import React, { useState, useEffect } from 'react';
import { Button, Result } from 'antd'; // Import Ant Design components
import './Checkout.css'; // Import the CSS file for styling
import { useCart } from '../../component/CartContext'; // Import the CartContext
import { Link } from 'react-router-dom';
import axios from 'axios'; 

function Checkout() {
  const { setCartItems } = useCart(); // Access cartItems and setCartItems from CartContext
  const { placeOrder } = useCart(); 

  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    creditCard: '',
  });

  const [deliveryOption, setDeliveryOption] = useState('homeDelivery');
  const [pickupStore, setPickupStore] = useState(''); 
  const [checkoutComplete, setCheckoutComplete] = useState(false); 
  const today = new Date();
  const dayDate = today.toISOString().split('T')[0];

  const { cartItems } = useCart();

  // console.log(cartItems[0].name)
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const total = calculateTotal();
  console.log(total)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handlePickupStoreChange = (e) => {
    setPickupStore(e.target.value);
  };

  const handleCheckout = () => {  
    // Display confirmation details (you might want to redirect to a confirmation page)
    setCheckoutComplete(true);

    // Empty the cart and set checkoutComplete to true
    setCartItems([]); 
      
    // Call placeOrder after setting checkoutComplete and clearing the cart
    placeOrder();  

    const orderData = {
      OrderId: Math.floor(Math.random() * 30),  
      userName: personalInfo.name,  
      orderName: cartItems[0].name,  
      orderPrice: total,  
      userAddress: personalInfo.street + " " + personalInfo.city + " " +  personalInfo.state, 
      creditCardNo: personalInfo.creditCard,
      dayDate: dayDate
    };


    axios.post('http://localhost:3001/orders/addOrder', orderData)
      .then(response => {
        console.log(response.data);
        // Perform any necessary actions after successful order placement
      })
      .catch(error => {
        console.error('Error adding order:', error);
        // Handle errors here
      });
  };

  const generateConfirmationNumber = () => {
    return Math.floor(Math.random() * 1000000).toString();
  };

  const calculateDeliveryDate = () => {
    const currentDate = new Date();
    const deliveryDate = new Date(currentDate.setDate(currentDate.getDate() + 14));
    return deliveryDate.toDateString();
  };

  const generateRandomStores = () => {
    const locationNames = [
      'Downtown',
      'Uptown',
      'West End',
      'East Side',
      'South Park',
      'North Ridge',
      'Midtown',
      'Harbor View',
      'Green Valley',
      'Sunset Hills',
    ];

    const stores = [];
    for (let i = 0; i < 10; i++) {
      const randomLocation = locationNames[Math.floor(Math.random() * locationNames.length)];
      stores.push(`Store ${i + 1} - ${randomLocation}`);
    }
    return stores;
  };

  const [randomStores, setRandomStores] = useState(generateRandomStores());

  useEffect(() => {
    axios.get('http://localhost:3001/orders/storeStreets')
      .then(response => {
        setRandomStores(response.data); // Set the streets in state 
      })
      .catch(error => {
        console.error('Error fetching streets:', error);
        // Handle errors
      });
    setRandomStores(generateRandomStores());
  }, []);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {checkoutComplete ? (
        <Result
          status="success"
          title="Order Confirmed!"
          subTitle={`Confirmation Number: ${generateConfirmationNumber()}\nDelivery/Pickup Date: ${calculateDeliveryDate()}`}
          extra={[
            <Button type="primary" key="goConsole">
              <Link to='/'>Go Console</Link>
            </Button>,
          ]}
        />
      ) : (
        <form className="checkout-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" value={personalInfo.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Street:</label>
            <input type="text" name="street" value={personalInfo.street} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input type="text" name="city" value={personalInfo.city} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input type="text" name="state" value={personalInfo.state} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Zip Code:</label>
            <input type="text" name="zipCode" value={personalInfo.zipCode} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Credit Card:</label>
            <input type="text" name="creditCard" value={personalInfo.creditCard} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label>Delivery Options:</label>
            <div className="delivery-options">
              <label>
                <input
                  type="radio"
                  value="homeDelivery"
                  checked={deliveryOption === 'homeDelivery'}
                  onChange={handleDeliveryOptionChange}
                />
                Home Delivery
              </label>
              <label>
                <input
                  type="radio"
                  value="inStorePickup"
                  checked={deliveryOption === 'inStorePickup'}
                  onChange={handleDeliveryOptionChange}
                />
                In-store Pickup
              </label>
            </div>
          </div>

          {deliveryOption === 'inStorePickup' && (
            <div className="form-group">
              <label>Select Pickup Store:</label>
              <select value={pickupStore} onChange={handlePickupStoreChange} required>
                <option value="" disabled>
                  Select a store
                </option>
                {randomStores.map((store, index) => (
                  <option key={index} value={store}>
                    {store}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button type="button" onClick={handleCheckout}>
            Checkout
          </button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
