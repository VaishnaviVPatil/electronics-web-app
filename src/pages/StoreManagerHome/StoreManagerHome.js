// StoreManagerHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StoreManagerHome.css'; // Import the CSS file

function StoreManagerHome() {
  return (
    <div className="container">
      <h2>Store Manager Home</h2>
      <div>
        <Link to="/Add-product">
          <button>Add Product</button>
        </Link>
        <Link to="/Delete-product">
          <button>Delete Product</button>
        </Link>
        <Link to="/Update-product">
          <button>Update Product</button>
        </Link>
        {/* <h4>Inventory</h4>
        <div>
        <Link to="/Inventory/AllProducts">
          <button>All Products</button>
        </Link>
        <Link to="/Inventory/BarChart">
          <button>Bar Chart</button>
        </Link>
        <Link to="/Inventory/ProductsOnSale">
          <button>Products on Sale</button>
        </Link>
        <Link to="/Inventory/ProductsRebates">
          <button>Products with Rebates</button>
        </Link>   */}
        {/* <h4>Sales Report</h4>
        <Link to="/SalesReport/ProductsSold">
          <button>Products Sold</button>
        </Link>
        <Link to="/SalesReport/ProductsSalesChart">
          <button>Products Sales Chart</button>
        </Link>
        <Link to="/SalesReport/DailySalesTransactions">
          <button>Daily Sales Transactions</button>
        </Link> 
      </div> */}
      </div>
    </div>
  );
}

export default StoreManagerHome;
