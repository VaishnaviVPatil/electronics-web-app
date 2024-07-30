import React, { useState } from 'react';
import axios from 'axios';
import './Homepage.css';
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete } from 'antd';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../component/Navbar'; 

function Homepage() {
  const [options, setOptions] = useState([]);
  const navigate = useNavigate(); 

  const handleSearch = async (value) => {
    console.log(value)
    try {
      const response = await axios.post('http://localhost:3001/product/search', { searchQuery: value });
      
      if (!response.data) {
        throw new Error('No data received from the server.');
      }
      // console.log(response.data)
      const products = response.data.map(product => ({
        value: product.Id, // Assuming Id is unique and can be used as value
        label: `${product.productName}`, 
        data: product,
      }));

      // console.log(products)
      setOptions(products);
    } catch (error) {
      console.error('Error searching products:', error);
      setOptions([]);
    }
  };

  const navigateToProductDetail = (productData) => {
    console.log(productData)
    // Redirect to the product detail page using the product ID and send productData in state
    navigate(`/productDetail`, { state: { product: productData } });
  };

  const aligncon = {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    margin: '20px',
  };

  return (
    <div className="container">
      <h1>Smart Home</h1>
      <p>Everything to make your home a Smart Home</p>
      <div className="child2"><Navbar /></div> 
      <div style={aligncon}>
        <SearchOutlined style={{ marginRight: '8px' }} />
        <AutoComplete
          popupClassName="certain-category-search-dropdown"
          popupMatchSelectWidth={500}
          style={{
            width: 300,
          }}
          onSearch={handleSearch}
          onSelect={(value, option) => navigateToProductDetail(option.data)}
          placeholder="Search for Products here!"
          options={options}
        />
      </div>
    </div>  
  );
}

export default Homepage;
