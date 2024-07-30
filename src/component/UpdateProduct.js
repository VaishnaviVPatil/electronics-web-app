import React, { useState } from 'react';
import axios from 'axios';

function UpdateProduct() {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState({
    id: '',
    name: '',
    ProductCategory: '',    
    price: '',
    description: '',
    image: '',
    manufacturer: '',
    condition: '',
    discount: 0,
  });
  const [isProductUpdated, setProductUpdated] = useState(false);

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdateProduct = () => {
    axios.put('http://localhost:3001/product/updateProduct', {
      id: productId,
      ProductType: product.ProductCategory,
      productName: product.name,
      productPrice: product.price,
      productImage: product.image,
      productManufacturer: product.manufacturer,
      productCondition: product.condition,
      productDiscount: product.discount
      // Add other fields as required
    })
      .then((response) => {
        console.log(response.data);
        setProductUpdated(true);
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };

  return (
    <div>
      {!isProductUpdated && (
        <>
          <h2>Update Product</h2>
          <div>
            <label>ID:</label>
            <input type="text" name="id" value={productId} onChange={handleProductIdChange} />
          </div>
          <div>
            <label>Product Category:</label>
            <select
              name="ProductCategory"
              value={product.ProductCategory}
              onChange={handleInputChange}
            >
              <option value="">Select a category</option>
              <option value="Speakers">Speakers</option>
              <option value="Lights">Lights</option>
              <option value="Locks">Locks</option>
              <option value="thermostats">Thermostats</option>
              <option value="DoorBell">Bells</option>
            </select>
          </div>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={product.name} onChange={handleInputChange} />
          </div>
          <div>
            <label>Price:</label>
            <input type="number" name="price" value={product.price} onChange={handleInputChange} />
          </div>
          <div>
            <label>Description:</label>
            <textarea name="description" value={product.description} onChange={handleInputChange} />
          </div>
          <div>
            <label>Image:</label>
            <input type="text" name="image" value={product.image} onChange={handleInputChange} />
          </div>
          <div>
            <label>Manufacturer:</label>
            <input type="text" name="manufacturer" value={product.manufacturer} onChange={handleInputChange} />
          </div>
          <div>
            <label>Condition:</label>
            <input type="text" name="condition" value={product.condition} onChange={handleInputChange} />
          </div>
          <div>
            <label>Discount:</label>
            <input type="number" name="discount" value={product.discount} onChange={handleInputChange} />
          </div>
          <button onClick={handleUpdateProduct}>Update Product</button>
        </>
      )}
      {isProductUpdated && (
        <div>
          <h3>Product Updated Successfully!!</h3>
        </div>
      )}
    </div>
  );
}

export default UpdateProduct;
