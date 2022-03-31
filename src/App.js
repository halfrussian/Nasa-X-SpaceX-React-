import React from 'react';
import Mars from './pages.js/mars';
import Crew from './pages.js/crew';
import WhosUp from './pages.js/whos.in.space';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
  <>
   <Auth0Provider
    domain="dev-h-bu2889.us.auth0.com"
    clientId="sUJQqFXRGkvLvtnecCn5D0ogm0HG88AI"
    redirectUri={window.location.origin}
  >
    <Router>
      <Routes>
        <Route path='/mars' element={<Mars/>} />
        <Route path='/' element={<Crew/>} />
        <Route path='/whos-in-space' element={<WhosUp/>} />
      </Routes>
    </Router>
    </Auth0Provider>
  </>
  );
}



export default App;
//npm install react-scripts --save