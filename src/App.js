import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './component/CartContext';
import { UserProvider } from './component/UserContext';
import Homepage from './pages/Homepage/Homepage';
import Speaker from './component/Speaker';
import DoorBell from './component/DoorBell';
import Light from './component/Light';
import Lock from './component/Lock';
import Thermostat from './component/Thermostat'; 
import Sidebox from './component/Sidebox';
import Cart from './component/Cart'; 
import ProductDetail from './component/ProductDetail'; 
import Checkout from './pages/Checkout/Checkout'
import UserHome from './pages/UserHome/UserHome'
import Registration from './pages/Registration/Registration'
import Login from './pages/Login/Login'; 
import StoreManager from './pages/StoreManagerHome/StoreManagerHome';
import Order from './component/Orders';
import AddProduct from './component/AddProduct'
import UpdateProduct from './component/UpdateProduct'
import DeleteProduct from './component/DeleteProduct'
import SalesHome from './pages/SalesHome/SalesHome'; 
import AddOrder from './component/AddOrder';
import DeleteOrder from './component/DeleteOrder'; 
import UpdateOrder from './component/UpdateOrder';
import ProductReview from './component/ProductReview'
import ProductViewReview from './component/productViewReview'
import AllProducts from './component/AllProducts';

function App() {
  return (
    <div className="App">
      <Router>
      <CartProvider>
        <UserProvider>
          <div className="parent">
            <div className="child1"><Sidebox /></div>
            <div className="child2">
              <Homepage /> 
                <Routes>
                  <Route path="/" exact element={<UserHome />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/StoreManagerHome" element={<StoreManager />} />
                  <Route path="/SalesHome" element={<SalesHome />} />
                  <Route path="/Orders" element={<Order />} />
                  <Route path="/Registration" exact element={<Registration />} />
                  <Route path="/Home" element={<UserHome />} />
                  <Route path="/ProductDetail/:from" element={<ProductDetail />} />
                  <Route path="/ProductDetail/" element={<ProductDetail />} />
                  <Route path="/ProductReview/:from" element={<ProductReview />} />
                  <Route path="/ProductViewReview/:from" element={<ProductViewReview />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/Checkout" element={<Checkout />} />
                  <Route path="/StoreManagerHome" element={<StoreManager />} />
                  <Route path="/Inventory/AllProducts" element = {<AllProducts />}></Route> 
                  <Route path="/Add-product" element = {<AddProduct />}></Route> 
                  <Route path="/Delete-product" element = {<DeleteProduct />}></Route> 
                  <Route path="/Update-product" element = {<UpdateProduct />}></Route> 
                  <Route path="/AddOrder" element = {<AddOrder />}></Route> 
                  <Route path="/DeleteOrder" element = {<DeleteOrder />}></Route>  
                  <Route path="/UpdateOrder" element={<UpdateOrder />} /> 
                  <Route path="/Speaker" element={<Speaker />} />
                  <Route path="/Speaker" element = {<Speaker />}> 
                    <Route path=":brand" element = {<Speaker />}></Route>
                  </Route>
                  <Route path="/DoorBell" element={<DoorBell />} />
                  <Route path="/DoorBell" element = {<DoorBell />}>
                    <Route path=":brand" element = {<DoorBell />}></Route>
                  </Route>
                  <Route path="/Light" element={<Light />} />
                  <Route path="/Light" element = {<Light />}>
                    <Route path=":brand" element = {<Light />}></Route>
                  </Route>
                  <Route path="/Lock" element={<Lock />} />
                  <Route path="/Lock" element = {<Lock />}>
                    <Route path=":brand" element = {<Lock />}></Route>
                  </Route>
                  <Route path="/Thermostat" element={<Thermostat />} />
                  <Route path="/Thermostat" element = {<Thermostat />}>
                    <Route path=":brand" element = {<Thermostat />}></Route>
                  </Route>
                </Routes> 
              </div> 
            <div />
          </div>
        </UserProvider>
      </CartProvider>
    </Router>
      
    </div>
  );
}

export default App;
