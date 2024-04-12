/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard'
import Main from './pages/Main'
import Appointment from './pages/user/appointment';
import Home from './pages/home';
import Appointment_Form from './pages/user/appointment_form';
import Example from './pages/example';
import About_us from './pages/user/about_us';
import Services from './pages/user/services';
import Admin from './pages/admin/admin';
import OTP from './pages/otp';
import Doctor from './pages/user/doctor'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Main' element={<Main/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/appointment' element={<Appointment/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/example' element={<Example/>}></Route>
        <Route path='/about_us' element={<About_us/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='appointment_form/' element={<Appointment_Form/>}></Route>
        <Route path='admin/' element={<Admin/>}></Route>
        <Route path='otp/' element={<OTP/>}></Route>
        <Route path='/doctor' element={<Doctor/>}></Route>

        


      </Routes>

    </BrowserRouter>
  );
}

export default App;
