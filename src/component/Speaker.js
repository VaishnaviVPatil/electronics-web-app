import React from 'react';
import Product from './Product';
import Products from '../product.json';
import './comp.css';
import { useParams } from 'react-router-dom';

function Speaker() {
  let { brand } = useParams(); 
  return (
    <div className='container-product'>
      {brand === undefined ? (
        Products.ProductCatalog.SpeakerCatalog.speaker.map((product) => (
          <Product key={product.id} product={product} from="Speakers"/>
        ))
      ) : (
        Products.ProductCatalog.SpeakerCatalog.speaker
          .filter((product) => product.manufacturer === brand)
          .map((filteredProduct) => (
            <Product key={filteredProduct.id} product={filteredProduct} from="Speakers" brand={brand} />
          ))
      )}
    </div>
  );
}

export default Speaker;
