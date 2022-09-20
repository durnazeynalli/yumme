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
import OnGoingOrders from "./pages/OnGoingOrders";
import MyOrder from "./pages/MyOrder";
import PendingOrder from "./pages/PendingOrder";
import CompletedOrder from "./pages/CompletedOrder";
import CancelledOrder from "./pages/CancelledOrder";
import CollectedOrder from "./pages/CollectedOrder";
import Profile from "./pages/Profile";

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
        <Route path="/ongoing" element={ <OnGoingOrders /> } />
        <Route path="/cooking" element={ <MyOrder /> } />
        <Route path="/pending" element={ <PendingOrder /> } />
        <Route path="/completed" element={ <CompletedOrder /> } />
        <Route path="/collected" element={ <CollectedOrder /> } />
        <Route path="/cancelled" element={ <CancelledOrder/> } />
        <Route path="/profile" element={  <Profile/> } />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
