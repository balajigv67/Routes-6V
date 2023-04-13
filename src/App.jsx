import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import NavBar from './NavBar'
import Footer from './pages/Footer'
import Profile from './pages/Profile'
function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/profile/:userName' element={<Profile />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
          <Route />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
