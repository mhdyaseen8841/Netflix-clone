import './App.css';
import React from 'react';

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import Movies from './components/Pages/Movies';
import TvShows from './components/Pages/TvShows';
function App() {
  return (
    <div className="App">
      <Router>
   <Routes>



   <Route exact path="/" element={<Home/>}/>
   
     
     

     <Route  path="/movies"  element={<Movies/>}/>
     

    <Route path="/tvshows"  element={<TvShows/>}/>
   

   </Routes>


   </Router>
  
  
  
    </div>
  );
}

export default App;
