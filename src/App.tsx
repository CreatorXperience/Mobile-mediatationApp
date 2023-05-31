import React from 'react';
import Splash from './pages/splashscreen';
import { Route,Routes} from 'react-router';
import Login from './pages/login';
import Signup from './pages/signup';
function App() {
  return (
    <div className="App">
      <Routes> 
   <Route path='/' element={<Splash />} /> 
   <Route path="/login" element={<Login/>} /> 
   <Route path='/signup' element={<Signup/>} /> 
   </Routes>
    </div>
  );
}

export default App;
