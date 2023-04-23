import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vans from './pages/Vans'
import NavBar from './components/layouts/NavBar'
import Footer from './components/layouts/Footer'
import VansDetails from './pages/VansDetails'
function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VansDetails />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )
}

export default App
