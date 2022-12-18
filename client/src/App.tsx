import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'

const App = () => {
  return (
    <div className='my-5 mx-5'>
      <Header />
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          <Route path='/' element={<Home />} />
          {/* <Route path='/country/:id' element={<Country />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>

  )
}
export default App