import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from './Components/Footer';

function App() {
  

  return (
    <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
         {/*  <Footer/> */}
        </footer>
    </div>
  )
}

export default App
