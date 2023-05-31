import React from 'react';
import Splash from './pages/splashscreen';
import { Route,Routes} from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes> 
   <Route path='/' element={<Splash />} /> 
   </Routes>
    </div>
  );
}

export default App;
