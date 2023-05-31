import React from 'react';
import Splash from './pages/splashscreen';
import { Route,Routes} from 'react-router';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Routes> 
   <Route path='/' element={<Splash />} /> 
   <Route path="/login" element={<Login/>} /> 
   </Routes>
    </div>
  );
}

export default App;
