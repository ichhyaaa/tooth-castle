import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard'
import Main from './pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Main' element={<Main/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
        


      </Routes>

    </BrowserRouter>
  );
}

export default App;
