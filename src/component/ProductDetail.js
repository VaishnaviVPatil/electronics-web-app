import React, { useState, useEffect } from 'react';
import Product from './Product'; 
import { useParams, useLocation } from 'react-router-dom';

function ProductDetail() {
  const { from } = useParams();
  const { product } = useLocation().state;
  const [makeFrom, setMakeFrom] = useState('');

  useEffect(() => {
    if (product) {
      setProducts(product);
    }
  }, [product]);

  const setProducts = (productData) => {
    // Mapping specific product types to shorter identifiers
    if (productData.ProductType === 'Speakers') {
      setMakeFrom('speaker');
    } else if (productData.ProductType === 'Locks') {
      setMakeFrom('lock');
    } else if (productData.ProductType === 'Lights') {
      setMakeFrom('light');
    } else if (productData.ProductType === 'DoorBell') {
      setMakeFrom('bell');
    }
  };

  return (
    !from ? 
    <>
      <Product key={product.id} product={product} from={makeFrom}/> 
    </> 
    : 
    (
      <div>
        <Product key={product.id} product={product} from={from}/> 
      </div>
    )
  );
}

export default ProductDetail;
