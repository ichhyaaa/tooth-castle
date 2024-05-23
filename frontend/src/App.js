import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import SignUp from "./pages/signup";
import Main from "./pages/Main";
import Appointment from "./pages/user/appointment";
import Appointment_Form from "./pages/user/appointment_form";
import About_us from "./pages/user/about_us";
import Services from "./pages/user/services";
import Review from "./pages/user/review";
import OTP from "./pages/otp";

//admin
import User from "./pages/admin/patients";
import Doctors from "./pages/admin/doctors";
import Payment from "./pages/admin/payment";
import Report from "./pages/admin/report";
import Financial_record from "./pages/user/financial_record";
import Appointmment from "./pages/admin/Appointment";
import { LoginAdmin } from "./pages/admin/loginAdmin";
//doctor
import UserDoctor from "./pages/doctor/userDoctor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route path="/Main" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route index element={<Appointment />} />
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/about_us" element={<About_us />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route
            path="appointment_form/"
            element={<Appointment_Form />}
          ></Route>
          <Route path="otp/" element={<OTP />}></Route>

          <Route path="/review" element={<Review />}></Route>
          <Route
            path="/financial_record"
            element={<Financial_record />}
          ></Route>
          <Route path="/admin/appointment" element={<Appointmment />}></Route>
          <Route path="/admin/patients" element={<User />}></Route>
          <Route path="/admin/doctors" element={<Doctors />}></Route>
          <Route path="/admin/payment" element={<Payment />}></Route>
          <Route path="/admin/report" element={<Report />}></Route>
          <Route path="/admin/login" element={<LoginAdmin />}></Route>
          <Route path="/doctor/userDoctor" element={<UserDoctor />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
