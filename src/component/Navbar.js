import React, { useState, useEffect } from 'react';
import { HomeOutlined, SlidersOutlined, SoundOutlined, BellOutlined, BulbOutlined, KeyOutlined, ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons'; 
import { Menu, Badge } from 'antd'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { useCart } from './CartContext';
import { useUser } from './UserContext';

function Navbar() {
  const [current, setCurrent] = useState(null);
  const { cartItems } = useCart();
  const { user, setUser } = useUser();
  const navigate = useNavigate(); // Import the useNavigate hook

  useEffect(() => { 
    document.title = `Smart Home - ${cartItems.length} items in the cart`;
  }, [cartItems]);

  const handleLogout = () => {
    // Clear user information from localStorage
    localStorage.removeItem('user');

    // Reset the user state
    setUser(null);

    // Redirect to the Home page after logout
    navigate('/Home');
  };

  const handleOrders = () => { 
    navigate('/Orders');
  };

  const items = [
    {
      label: 'Home',
      key: 'Home',
      icon: <HomeOutlined />,
    },
    {
      label: 'Speaker',
      key: 'Speaker',
      icon: <SoundOutlined />,
    },
    {
      label: 'DoorBell',
      key: 'DoorBell',
      icon: <BellOutlined />,
    },
    {
      label: 'Light',
      key: 'Light',
      icon: <BulbOutlined />,
    },
    {
      label: 'Locks',
      key: 'Lock',
      icon: <KeyOutlined />,
    },
    {
      label: 'Thermostat',
      key: 'Thermostat',
      icon: <SlidersOutlined />,
    },
    {
      label: 'Cart',
      key: 'Cart',
      icon: <Badge count={cartItems.length}><ShoppingCartOutlined /></Badge>,
    },
    {
      label: 'Login',
      key: 'Login',
      icon: <LoginOutlined />,
    }
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  }; 

  return (
    <div className="navbar">
      <Menu className="menu" onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {items.map((item) => (
          <Menu.Item className="menu-item" key={item.key} icon={item.icon}>
            {item.label === 'Login' ? (
              user ? (
                <>
                  <span>Hello, {user.username}</span>
                  <button onClick={handleLogout}>Logout</button> 
                  <button onClick={handleOrders}>Orders</button> 
                </>
              ) : (
                <Link to={`/${item.key}`}>{item.label}</Link>
              )
            ) : (
              <Link to={`/${item.key}`}>{item.label}</Link>
            )}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
  
}

export default Navbar;
