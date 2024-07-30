import React from 'react';
import Product from './Product';
import Products from '../product.json';
import './comp.css';
import { useParams } from 'react-router-dom';

function DoorBell() {
  let { brand } = useParams();

  return (
    <div className='container-product'>
      {brand === undefined ? (
        Products.ProductCatalog.DoorBellCatalog.bell.map((product) => (
          <Product key={product.id} product={product} from="DoorBell" />
        ))
      ) : (
        Products.ProductCatalog.DoorBellCatalog.bell
          .filter((product) => product.manufacturer === brand)
          .map((filteredProduct) => (
            <Product key={filteredProduct.id} product={filteredProduct} from="DoorBell" brand={brand} />
          ))
      )}
    </div>
  );
}

export default DoorBell;
