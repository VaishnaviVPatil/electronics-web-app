import React, { useState, useEffect } from 'react';
import { FolderViewOutlined, ShoppingCartOutlined, MessageOutlined, EyeOutlined } from '@ant-design/icons';
import { Card, Popconfirm, message, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

function Product(props) {
  const { product, from } = props;
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [data, setData] = useState({});

  useEffect(() => {
    setData(product); 
  }, [product]);

  const handleCardClick = (productData) => {
    navigate(`/productDetail/${from}`, { state: { product: productData } });
  };

  const handleReviewClick = (productData) => {
    navigate(`/productReview/${from}`, { state: { product: productData } });
  };

  const handleViewClick = (productData) => {
    navigate(`/productViewReview/${from}`, { state: { product: productData } });
  };

  const handleAddToCart = () => {
    addToCart(data);
    message.success('Item added to the cart');
  };

  const confirmAddToCart = () => {
    handleAddToCart();
  };

  const cancelAddToCart = () => {
    message.info('Adding to cart canceled');
  };  
 
  return (
    <Card
      style={{ width: 300, height: 'auto' }}
      size='small'
      cover={
        <img
          alt={data.name || 'product-image'}
          src={data.productImage ? `/images/${data.ProductType}/${data.productImage}` : `/images/${from}/${data.image}`}
          style={{ objectFit: 'cover', height: '200px' }}
        />
      }
      actions={[
        <Popconfirm
          title="Are you sure you want to add this item to the cart?"
          onConfirm={confirmAddToCart}
          onCancel={cancelAddToCart}
          okText="Yes"
          cancelText="No"
        >
          <ShoppingCartOutlined key="setting" />
        </Popconfirm>,
        <Tooltip title="View Details"><FolderViewOutlined key="edit" onClick={() => handleCardClick(data)} /></Tooltip>,
        <Tooltip title="Add Reviews"><MessageOutlined key="edit" onClick={() => handleReviewClick(data)}/></Tooltip>,
        <Tooltip title="View Reviews"><EyeOutlined key="edit" onClick={() => handleViewClick(data)}/></Tooltip>
      ]}
    >
      {data && (
        <>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <p><b>{data.price}</b></p>
        </>
      )}
      {data && (
      <>
      <>
          <h3>{data.productName}</h3> 
          <p><b>{data.productPrice}</b></p>
        </>
      </>)}
    </Card>
  );
}

export default Product;
