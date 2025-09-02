import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Footer from './components/Footer'

function App() {

  return (
    <div className='font-geist'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
