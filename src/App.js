import './App.css';
import AuthContexProvider from './context/AuthContext';
import Navbar from './component/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Authentication/Login';
import SignUp from './component/Authentication/SignUp';
import AuthState from './context/AuthState';
import Alert from './component/Alert';
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 2500);
  }
  return (
    <div className="App">
      
      <AuthState>
      
      <BrowserRouter>  
      <div className='fixed-top'>
      <Navbar/>
      <Alert alert={alert}/>
         </div>
      <Routes> 
        <Route path='/' element={<Home showAlert={showAlert}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>

      </AuthState>
    </div>
  );
}
export default App;
