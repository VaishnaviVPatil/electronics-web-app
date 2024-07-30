import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function AddOrder() {

  const [deliveryOption, setDeliveryOption] = useState('homeDelivery');
  const [pickupStore, setPickupStore] = useState(''); 
  const [order, setOrder] = useState({
      OrderId: '',  
      userName: '',  
      orderName:  '',  
      orderPrice:  '',  
      city:'',
      street: '',
      State: '', 
      creditCardNo:  '',
      zipcode:'',
      total: '',
      dayDate:'', // Updated the state variable name
  });
  const [isOrderAdded, setOrderAdded] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const today = new Date();
  const dayDate = today.toISOString().split('T')[0];

  const handleAddOrder = () => { 
    const orderData = {
      OrderId: Math.floor(Math.random() * 30),  
      userName: order.userName,  
      orderName: order.orderName,  
      orderPrice: order.total,  
      userAddress: order.street + " " + order.city + " " +  order.State, 
      creditCardNo: order.creditCardNo,
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
    // For simplicity, we're just setting a flag to indicate the order has been added
    setOrderAdded(true);
  };

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

  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handlePickupStoreChange = (e) => {
    setPickupStore(e.target.value);
  };

  return (
    <div>
      <form className="checkout-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="userName" value={order.userName} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Order Name:</label>
          <input type="text" name="orderName" value={order.orderName} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Street:</label>
          <input type="text" name="street" value={order.street} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" name="city" value={order.city} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input type="text" name="State" value={order.State} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Zip Code:</label>
          <input type="text" name="zipcode" value={order.zipcode} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Credit Card:</label>
          <input type="text" name="creditCardNo" value={order.creditCardNo} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>total Price:</label>
          <input type="text" name="total" value={order.total} onChange={handleInputChange} required />
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

        <button type="button" onClick={handleAddOrder}>
          Add Order
        </button>
      </form>
      {isOrderAdded && <h3>Order Added Successfully!!</h3>}
    </div>
  );
}

export default AddOrder;
