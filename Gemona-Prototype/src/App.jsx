import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import CreateBusiness from './pages/CreateBusiness';
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
                    <Route path="createB" element={<CreateBusiness />} />
                    <Route path="services" element={<Services />} />
                </Route>
            </Routes>
        </Router>
    )
  }