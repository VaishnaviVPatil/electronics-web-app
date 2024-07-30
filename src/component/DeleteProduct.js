import React, { useState } from 'react';
import axios from 'axios';

function DeleteProduct() {
  const [productId, setProductId] = useState('');
  const [deletedProductId, setDeletedProductId] = useState(null);

  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };

  const handleDeleteProduct = () => {
    // Add logic to fetch and delete the product from your data source
    // For simplicity, this example just displays a message with the deleted product ID
    if (productId) {
      setDeletedProductId(productId);
      axios.delete('http://localhost:3001/product/deleteProduct', {
        data: { id: productId } // Send the ID in the request body
      })
      .then((response) => {
        console.log(response.data);
        // Handle success message or actions
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
        // Handle error message or actions
      });
      setProductId('');
    } else {
      alert('Please enter a product ID.');
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <div>
        <label>Product ID:</label>
        <input type="text" value={productId} onChange={handleInputChange} />
      </div>
      <button onClick={handleDeleteProduct}>Delete Product</button>

      {deletedProductId && (
        <div style={{ marginTop: '20px' }}>
          <h3>Product Deleted:</h3>
          <p>Product ID: {deletedProductId}</p>
        </div>
      )}
    </div>
  );
}

export default DeleteProduct;
