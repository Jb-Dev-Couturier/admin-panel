import SideBar from './components/SideBar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import NewUser from './pages/NewUser';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="containerApp">
        <SideBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            <Route path="login" element={<Login />} />
            {/* User Route */}
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<UserDetail />} />
            <Route path="/newUser" element={<NewUser />} />
            {/* Product Route */}
            <Route path="/products" element={<ProductsList />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
