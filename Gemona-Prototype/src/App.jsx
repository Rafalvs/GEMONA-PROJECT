import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/user/Login";
import Profile from "./pages/user/Profile";
import Register from "./pages/user/Register";
import CreateBusiness from './pages/business/CreateBusiness';
import BusinessProfile from './pages/business/BusinessProfile';
import Services from "./pages/Services";
  
export default function App(){
    return (
        <Router>
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="createBusiness" element={<CreateBusiness />} />
                    <Route path="businessProfile" element={<BusinessProfile />} />
                    <Route path="services" element={<Services />} />
                </Route>
            </Routes>
        </Router>
    )
  }