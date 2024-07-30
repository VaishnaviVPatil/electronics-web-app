import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [product, setProduct] = useState({
    Id: '',
    name: '',
    ProductCategory: '',
    price: '',
    description: '',
    image: '',
    manufacturer: '',
    condition: '',
    discount: 0,
  });
  const [isProductAdded, setProductAdded] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    const SendProduct = {
      ProductType: product.ProductCategory,
      Id: product.Id,
      productName: product.name,
      productPrice: product.price ,
      productImage: product.image,
      productManufacturer: product.manufacturer,
      productCondition: product.condition,
      productDiscount: product.discount
    }
    console.log(SendProduct)
    axios.post('http://localhost:3001/product/addProduct', SendProduct) // Change the endpoint to match your API endpoint
      .then((response) => {
        console.log(response.data);  
        setProductAdded(true);  
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        // Handle errors if needed
      });
    // setProductAdded(true);
  };

  return (
    <div>
      {!isProductAdded && (
        <>
          <h2>Add Product</h2>
          <div>
            <label>ID:</label>
            <input type="text" name="Id" value={product.id} onChange={handleInputChange} /> 
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
            <input type="text" name="price" value={product.price} onChange={handleInputChange} />
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
          <button onClick={handleAddProduct}>Add Product</button>
        </>
      )}
      {isProductAdded && <h3>Product Added Successfully!!</h3>}
    </div>
  );
}

export default AddProduct;
