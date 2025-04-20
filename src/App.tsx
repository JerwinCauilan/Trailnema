import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import Details from './pages/Details/Details'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="*" element={ <Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
