import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../src/App.css';
import Home from "./pages/Home.js"
import Estone from "./pages/Estone.js"


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
             {/* atob() base64 encoder */}
            <Route path="/e-stones/example" element={<Estone />} ></Route>
          </Routes>
          </div>
        </Router>
        
      </div>
    )
  }
}

export default App;
