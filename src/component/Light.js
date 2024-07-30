import React from 'react';
import Product from './Product';
import Products from '../product.json';
import { useParams } from 'react-router-dom';

function Light() {
  let { brand } = useParams();
  console.log(brand)

  return (
    <div className='container-product'>
      {brand === undefined ? (
        Products.ProductCatalog.LightCatalog.light.map((product) => (
          <Product key={product.id} product={product} from="Lights" />
        ))
      ) : (
        Products.ProductCatalog.LightCatalog.light
          .filter((product) => product.manufacturer === brand)
          .map((filteredProduct) => (
            <Product key={filteredProduct.id} product={filteredProduct} from="Lights" brand={brand} />
          ))
      )}
    </div>
  );
}

export default Light;
