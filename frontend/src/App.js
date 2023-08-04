import React from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import AdminPage from './admin/adminPage';
import Home from './components/home';
import Connecter from './admin/login';



function App() {

  return (
    
        <Router>
          
            <Routes>
              <Route path="/" Component={ Home } />
              <Route path="/login" Component={ Connecter } />
              <Route path="/adminpage"  Component={ AdminPage } />
            </Routes>

        </Router>
      
  );
}

export default App
