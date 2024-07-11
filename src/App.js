
import './App.css';
import React from 'react';

import { 
  BrowserRouter as Router,
  Route, 
  Routes,  
} from 'react-router-dom'

import NavBar from './Layout/NavBar';
import Footer from './Layout/Footer';
import Brisbane from './Page/Brisbane/Brisbane';
import Login from './Page/Login/Login';
import DailyWeather from './Page/DailyPage/DailyWeather';
import SearchLoc from './Page/Search/SearchLoc';

function App(){
  return (

    <div className='allComponent'>

        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/"  element={< Brisbane/>} />
            <Route path="/dailyWeather" element={<DailyWeather />} />
            <Route path="/searchloc" element={<SearchLoc />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>

          <Footer />
    </div> 
  )
}

export default App;
