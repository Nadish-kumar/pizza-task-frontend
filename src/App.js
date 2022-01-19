import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Homepage/Home';
import Admin from './Components/Admin page/Admin';
import Adminlog from './Components/Admin page/Adminlogin/Adminlog';
import Forgetpassadd from './Components/Admin page/Adminforgotpassword/Forgetpassadd';
import Adminreg from './Components/Admin page/Adminreg/Adminreg';
import Userreg from './Components/Usersign-up/Userreg';
import Userlogin from './Components/Userlogin/Userlogin';
import Fortgotpassuser from './Components/Userlogin/Forgotpassworduser/Fortgotpassuser';
import Dashboard from './Components/Dashboard/Dashboard';
import Admindashboard from './Components/Admindashboard/Admindashboard';
import Sauce from './Components/Admindashboard/Sauce';
import Cheese from './Components/Admindashboard/Cheese';
import Veggies from './Components/Admindashboard/Veggies';
import Meat from './Components/Admindashboard/Meat';
import Payment from './Components/Payment/Payment';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/adminlogin" element={<Adminlog/>} />
    <Route path="/passwordupdateadd" element={<Forgetpassadd/>} />
    <Route path="/adminreg" element={<Adminreg/>} />
    <Route path="/userreg" element={<Userreg/>} />
    <Route path="/userlogin" element={<Userlogin/>} />
    <Route path="/passwordupdateuser" element={<Fortgotpassuser/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/admin-dashboard" element={<Admindashboard/>} />
    <Route path="/admin-dashboard/sauce" element={<Sauce/>} />
    <Route path="/admin-dashboard/cheese" element={<Cheese/>} />
    <Route path="/admin-dashboard/veggies" element={<Veggies/>} />
    <Route path="/admin-dashboard/meat" element={<Meat/>} />
    <Route path="/dashboard/payment-gateway" element={<Payment/>} />
      </Routes>
      </BrowserRouter>
 
  );
}

export default App;
