import React, { useState, useEffect } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'


const Home = () => {
  return <h1>Home</h1>
}
const Generos = () => {
  return <h1>Generos</h1>
}

function App() {
  
  return (
    <Router>
        <div>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/generos' component={Generos} />
        </div>
    </Router>
  )
}

export default App;
//commit antes de instalar axios