import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './views/LandingPage/LandingPage.jsx'
import Home from './views/Home/Home'
import Form from './views/Form/Form'


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
        <Route
          path='/detail/:id'
        />
        <Route 
          path='/newdriver'
          element = {<Form/>}
        />
      </Routes>
    </div>
  )
}

export default App
