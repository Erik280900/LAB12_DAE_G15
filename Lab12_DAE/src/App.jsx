import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SerieComponent from "./components/HeaderComponent"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import SeriePage from './pages/SeriePage'
import SerieFormPage from './pages/SerieFormPage'
import CategoryFormPage from './pages/category/CategoryFormPage'
import CategoryEditFormPage from './pages/category/CategoryEditFormPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<LoginPage/>} />
       <Route path="/home" element={<HomePage/>} />
       <Route path="/categories" element={<CategoryPage/>} />
       <Route path="/series" element={<SeriePage/>} />
       <Route path="/categories/new" element={<CategoryFormPage/>} />
       <Route path="/categories/edit/:id" element={<CategoryEditFormPage/>} />
       <Route path="/series/edit/:idserie" element={<SerieFormPage/>} />
    </Routes>
    </BrowserRouter>
  );
}
        


export default App
