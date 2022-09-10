import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home.js';

function App() {
  return (
    <div className="wrapper">
    	<BrowserRouter>
        	<nav>
          		<ul>
            			<li><Link to="/">Home</Link></li>
          		</ul>
        	</nav>
   		
	  	<Routes>
        		<Route path="/" element={<Home/>} />
      		</Routes>
    	</BrowserRouter>
    </div>
  );
}

export default App;
