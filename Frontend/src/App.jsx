import { Routes, Route } from "react-router-dom";
import Home from './Components/Main/Home.jsx'
import Menu from "./Components/Menu/Menu.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Login/Signup.jsx";
import Contacts from "./Components/Contact/Contact.jsx";
import UserOrders from "./Components/Order/Orders.jsx";
import Admin from './Components/Admin/Admin.jsx';
import Dashboard from './Components/Admin/Dashboard.jsx';
import Orders from './Components/Admin/Order.jsx';
import AddPizza from './Components/Admin/AddPizza.jsx';
import EditPizza from './Components/Admin/EditPizza.jsx';
import Feedback from './Components/Admin/Feedback.jsx';
import Profile from "./Components/Profile/Profile.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/Menu' element={<Menu />}></Route>
      <Route path="/Cart" element={<Cart />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Signup" element={<Signup />}></Route>
      <Route path="/Contacts" element={<Contacts />}></Route>
      <Route path="/Orders" element={<UserOrders/>}></Route>
      <Route path="/Profile" element={<Profile/>}></Route>
      <Route path='/admin' element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path='orders' element={<Orders />} />
        <Route path='addpizza' element={<AddPizza />} />
        <Route path='editpizza' element={<EditPizza />} />
        <Route path='feedback' element={<Feedback />} />
      </Route>
    </Routes>
  )
}
export default App