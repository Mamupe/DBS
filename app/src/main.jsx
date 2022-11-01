import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Finder from "./Pages/Finder";
import Form from "./Pages/Form";
import Gallery from "./Pages/Gallery";
import Detail from "./Pages/Detail";
import NotFound from  "./Pages/NotFound";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter basename="/">
    <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="finder" element={<Finder />} />
        <Route path="form" element={<Form />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)