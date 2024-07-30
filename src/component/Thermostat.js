import React from 'react';
import Product from './Product';
import Products from '../product.json';
import { useParams } from 'react-router-dom';

function Thermostat() {
  let { brand } = useParams();

  return (
    <div className='container-product'>
      {brand === undefined ? (
        Products.ProductCatalog.ThermostatCatalog.thermostat.map((product) => (
          <Product key={product.id} product={product} from="Thermostat" />
        ))
      ) : (
        Products.ProductCatalog.ThermostatCatalog.thermostat
          .filter((product) => product.manufacturer === brand)
          .map((filteredProduct) => (
            <Product key={filteredProduct.id} product={filteredProduct} from="Thermostat" brand={brand} />
          ))
      )}
    </div>
  );
}

export default Thermostat;
