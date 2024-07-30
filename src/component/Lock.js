import React from 'react';
import Product from './Product';
import Products from '../product.json';
import { useParams } from 'react-router-dom';

function Lock() {
  let { brand } = useParams();

  return (
    <div className='container-product'>
      {brand === undefined ? (
        Products.ProductCatalog.DoorLockCatalog.lock.map((product) => (
          <Product key={product.id} product={product} from="Locks" />
        ))
      ) : (
        Products.ProductCatalog.DoorLockCatalog.lock
          .filter((product) => product.manufacturer === brand)
          .map((filteredProduct) => (
            <Product key={filteredProduct.id} product={filteredProduct} from="Locks" brand={brand} />
          ))
      )}
    </div>
  );
}

export default Lock;
