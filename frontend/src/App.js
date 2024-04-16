/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import SignUp from "./pages/signup";

import Main from "./pages/Main";
import Appointment from "./pages/user/appointment";
import Home from "./pages/home";
import Appointment_Form from "./pages/user/appointment_form";
import Example from "./pages/example";
import About_us from "./pages/user/about_us";
import Services from "./pages/user/services";

import OTP from "./pages/otp";
import Doctor from "./pages/user/doctor";

import Admin from "./pages/admin/admin";
import Patients from "./pages/admin/patients";
import Doctors from "./pages/admin/doctors";
import Payment from "./pages/admin/payment";
import Report from "./pages/admin/report";
import Review from "./pages/user/review";
import Financial_record from "./pages/user/financial_record";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/example" element={<Example />}></Route>
        <Route path="/about_us" element={<About_us />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="appointment_form/" element={<Appointment_Form />}></Route>
        <Route path="otp/" element={<OTP />}></Route>
        <Route path="/doctor" element={<Doctor />}></Route>
        {/* <Route path='/review' element={<Review/>}></Route> */}
        <Route path="/financial_record" element={<Financial_record />}></Route>

        <Route path="admin/" element={<Admin />}></Route>
        <Route path="/patients" element={<Patients />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/report" element={<Report />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
