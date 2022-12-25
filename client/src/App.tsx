import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Breed from './components/Breed'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import SeeMore from './components/SeeMore'
import { createContext, useState } from 'react'

type AppContext = {
  breeds: Array<string> | any,
  setBreeds: React.Dispatch<React.SetStateAction<never[]>>,
}

const ContextState = {
  breeds: [],
  setBreeds: () => { },
}

export const AppContext = createContext<AppContext>(ContextState)

const App = () => {
  const [breeds, setBreeds] = useState([])

  return (
    <div className='mt-5 mx-5'>
      <AppContext.Provider value={{
        breeds,
        setBreeds
      }}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/seemore' element={<SeeMore />} />
            <Route path='/breed/:id' element={<Breed />} />
          </Routes>
        </Router>
      </AppContext.Provider>
      <Footer />
    </div>

  )
}
export default App