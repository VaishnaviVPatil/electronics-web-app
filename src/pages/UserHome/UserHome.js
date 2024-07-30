// UserHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import './UserHome.css'; // Import your CSS file for styling

function UserHome() {
  return (
    <div className="user-home-container">
      <header>
        <h1>Smart Homes</h1>
        <p>Everything to make your home a Smart Home</p>
      </header>

      <div className='ots'>
        <h2>Our Top Sellers:</h2>
      </div>

      <div className='topseller'>
        <div className='card'>
          <img src={require('./sony.jpeg')} className="card-img-top" width="285px" height="200px" />
          <div className='card-body'>
            <h5 className='card-title'>Sony SRS-XB300</h5>
          </div>
          <div className='card-body'>
            <a href='/' className='card-link'>Buy Now</a>
            <a href='/' className='card-link'>Write Review</a>
          </div>
        </div>

        <div className='card'>
          <img src={require('./sony.jpeg')} className="card-img-top" width="285px" height="200px" />
          <div className='card-body'>
            <h5 className='card-title'>Ecobee Smart Thermostat</h5>
          </div>
          <div className='card-body'>
            <a href='/' className='card-link'>Buy Now</a>
            <a href='/' className='card-link'>Write Review</a>
          </div>
        </div>
      </div>


    </div>
  );
}

export default UserHome;
