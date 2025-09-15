import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Contact from "./components/pages/Contact";
import Checkout from "./components/pages/Checkout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import CreateBusiness from './components/pages/CreateBusiness';
import Services from "./components/pages/Services";
  
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