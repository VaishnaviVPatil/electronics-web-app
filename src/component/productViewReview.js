import React from 'react';
import Product from './Product'; 
import { useParams, useLocation } from 'react-router-dom';

const reviews = [
  {
    _id: '652315f99ef2e10267b9f526',
    title: 'myReviews',
    userName: 'Tanmay',
    productName: 'speaker2',
    productType: 'speakers', 
    reviewRating: 4,
    reviewDate: '2023-10-08',
    reviewText: 'GOod',
    retailerpin: '60616',
    retailercity: 'cicago',
    price: 39,
  },
  {
    _id: '6523697d08095a71c8bd044e',
    title: 'myReviews',
    userName: 'Tanmay',
    productName: 'speaker2',
    productType: 'speakers', 
    reviewRating: 5,
    reviewDate: '2023-10-02',
    reviewText: ' Great',
    retailerpin: '37027',
    retailercity: 'TN',
    price: 39,
  },
];


const filteredReviews = reviews.filter(
  (review) => review.productName.includes('speaker2') || review.productName.includes('Echo Dot')
);


function ProductDetail() {
  const { from } = useParams();
  const { product } = useLocation().state; 
  console.log(product)
  return (
    // Your ProductDetails component
    <div>
       <Product key={product.id} product={product} from={from}/> 
       {(product.name === 'Echo Dot (5th Gen, 2022 release)' || product.name === 'Echo Dot') && (
        <div>
          <h2>Reviews for {product.name}</h2>
          <ul>
            {filteredReviews.map((review, index) => (
              <li key={index}>
                <p>User: {review.userName} </p>
                <p>Review: {review.reviewText}</p>
                <p>Rating: {review.reviewRating}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
