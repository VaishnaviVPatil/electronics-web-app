import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from your API 
        axios.get('http://localhost:3001/product/allproducts')
          .then((response) => {
            console.log('Response data:', response.data); // Log the response data
            if (Array.isArray(response.data)) {
              setProducts(response.data);
            } else {
              console.error('Invalid data format received');
            }
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          }); 
  }, []);

  // Function to display the table of products
  const displayProductTable = (products) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity Available</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>${product.productPrice.toFixed(2)}</td>
              <td>{product.productQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h2>All Products</h2>
      {displayProductTable(products)}
    </div>
  );
}

export default AllProducts;
