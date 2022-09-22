import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/App.css';
import Home from "./pages/Home.js"
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound';
import Estone2 from "./pages/Estone2.js"
import Estone from './pages/Estone.js'
import {v4 as uuidv4} from 'uuid';


function App() {

const [userID, setUserID] = useState(uuidv4())
const [loggedIn, setLoggedIn] = useState(false);
const [stone, setStone] = useState({});
//states for names
// const [fName, setFName] = useState('');
// const [lName, setLName] = useState('');
// const [mName, setMName] = useState('');

// const [urlPath, setPath] = useState('');



 
    return (
      <div>
        <Router>
          <div>
          <Routes>
            <Route path="/" element={<Home setStone={setStone} loggedIn={loggedIn} setLoggedIn={setLoggedIn} userID={userID} />} />
            <Route path="login" element={<Login setUserID={setUserID} setLoggedIn={setLoggedIn}/>}/>
             {/* atob() base64 encoder */}
            <Route path="/e-stones/example" element={<Estone2 />} ></Route>
            <Route path={`/:personID`} element={<Estone stone={stone} setStone={setStone}/>} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          </div>
        </Router>
        
      </div>
    )
  
}

export default App;


//setPath={setPath} urlPath={urlPath} userID={userID} fName={fName} lName={lName} mName={mName} setFName={setFName} setLName={setLName} setMName={setMName}