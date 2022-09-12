import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Headers/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import RestaurantDetails from "./pages/RestaurantDetails";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import ConfirmCode from "./pages/Auth/ConfirmCode";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={ <Homepage/> } />
        <Route path="/sign-in" element={ <SignIn /> } />
        <Route path="/register" element={ <SignUp /> } />
        <Route path="/forgetPassword" element={ <ForgetPassword /> } />
        <Route path="/confirmCode" element={ <ConfirmCode /> } />
        <Route path="/resetPassword" element={ <ResetPassword /> } />
        <Route path="/drink" element={ <Categories title="Drinks" /> } />
        <Route path="/details" element={ <RestaurantDetails title="Drinks" /> } />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
