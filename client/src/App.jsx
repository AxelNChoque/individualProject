import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './views/LandingPage/LandingPage.jsx'
import Home from './views/Home/Home'

function App() {

  return (
    <div >
      <Routes>
        <Route
          path='/'
          element = {<LandingPage/>}
        />
        <Route
          path='/home'
          element = {<Home/>}
        />
      </Routes>
    </div>
  )
}

export default App
