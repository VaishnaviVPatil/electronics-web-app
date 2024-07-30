import React, { useState } from 'react';
import axios from 'axios';
import Product from './Product'; 
import { useParams, useLocation } from 'react-router-dom';

function ProductReview() {
  const { from } = useParams();
  const { product } = useLocation().state;
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const [formData, setFormData] = useState({
    ProductModelName: '',
    ProductCategory: '', 
    ProductPrice: '',
    StoreID: '',
    StoreZip: '',
    StoreCity: '',
    StoreState: '',
    ProductOnSale: '',
    ManufacturerName: '',
    ManufacturerRebate: '',
    UserID: '',
    UserAge: '',
    UserGender: '',
    UserOccupation: '',
    ReviewRating: '',
    ReviewDate: '',
    ReviewText: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/addReview', formData);
      console.log(response.data);
      setFormData({
        ProductModelName: '',
        ProductCategory: '',
        ProductPrice: '',
        StoreID: '',
        StoreZip: '',
        StoreCity: '',
        StoreState: '',
        ProductOnSale: '',
        ManufacturerName: '',
        ManufacturerRebate: '',
        UserID: '',
        UserAge: '',
        UserGender: '',
        UserOccupation: '',
        ReviewRating: '',
        ReviewDate: '',
        ReviewText: '',
      });
      setSubmissionStatus(true); 
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus(true); 
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Product key={product.id} product={product} from={from}/>
      {submissionStatus ? (
        <h2>Product review submitted!</h2> // Display message on submission
      ) : (
        <>
      <h2>Add your Product Review here</h2>
      <form onSubmit={handleSubmit}>
            <label>
            Product Model Name:
            <input
                type="text"
                name="ProductModelName"
                value={formData.ProductModelName}
                onChange={handleInputChange}
            />
            </label>
            <label>
            Product Category:
            <select
                name="ProductCategory"
                value={formData.ProductCategory}
                onChange={handleInputChange}
            >
                <option value="">Select a category</option>
                <option value="speakers">Speakers</option>
                <option value="lights">Lights</option>
                <option value="locks">Locks</option>
                <option value="thermostats">Thermostats</option>
                <option value="bells">Bells</option>
            </select>
            </label>
            <label>
            Product Price:
            <input
                type="text"
                name="ProductPrice"
                value={formData.ProductPrice}
                onChange={handleInputChange}
            />
            </label>
            <label>
                Store Zip:
                <input
                type="number"
                name="StoreZip"
                value={formData.StoreZip}
                onChange={handleInputChange}
                />
            </label>
            <label>
                Store City:
                <input
                type="text"
                name="StoreCity"
                value={formData.StoreCity}
                onChange={handleInputChange}
                />
            </label>
            <label>
                Store State:
                <input
                type="text"
                name="StoreState"
                value={formData.StoreState}
                onChange={handleInputChange}
                />
            </label>
            <label>
                Product On Sale:
                <input
                type="text"
                name="ProductOnSale"
                value={formData.ProductOnSale}
                onChange={handleInputChange}
                />
            </label>
            <label>
                Manufacturer Name:
                <input
                type="text"
                name="ManufacturerName"
                value={formData.ManufacturerName}
                onChange={handleInputChange}
                />
            </label>
            <label>
                Manufacturer Rebate:
                <input
                type="text"
                name="ManufacturerRebate"
                value={formData.ManufacturerRebate}
                onChange={handleInputChange}
                />
            </label>
            <label>
                User ID:
                <input
                type="text"
                name="UserID"
                value={formData.UserID}
                onChange={handleInputChange}
                />
            </label>
            <label>
                User Age:
                <input
                type="text"
                name="UserAge"
                value={formData.UserAge}
                onChange={handleInputChange}
                />
            </label>
            <label>
                User Gender:
                <input
                type="text"
                name="UserGender"
                value={formData.UserGender}
                onChange={handleInputChange}
                />
            </label>
            <label>
                User Occupation:
                <input
                type="text"
                name="UserOccupation"
                value={formData.UserOccupation}
                onChange={handleInputChange}
                />
            </label>
            <label>
                Review Rating:
                <input
                type="text"
                name="ReviewRating"
                value={formData.ReviewRating}
                onChange={handleInputChange}
                />
            </label>
            <label>
                Review Date:
                <input
                type="text"
                name="ReviewDate"
                value={formData.ReviewDate}
                onChange={handleInputChange}
                />
            </label>
            <label>
                Review Text:
                <textarea
                name="ReviewText"
                value={formData.ReviewText}
                onChange={handleInputChange}
                ></textarea>
            </label>
            <button type="submit">Submit Review</button>
        </form> </>
      )}
    </div>
  );
}

export default ProductReview;
