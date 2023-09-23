// import { useState } from 'react'
import './App.css';
import Nav from './components/nav';

function App() {

  return (
    <section className='navbar-hero'>
      <Nav></Nav>
      <div className='hero'>
        <div className='hero-elements'>
          <div className='heading-body'>
            <h1>Premium<br></br> Car Rental in <br></br> the United Kingdom</h1>
            <p>It is a long established fact that a reader will be <br></br> distracted by the readable content of a page.</p>
          </div>
        </div>
        <div className='hero-rent-search'>
        </div>
      </div>
    </section>
  )
}

export default App
