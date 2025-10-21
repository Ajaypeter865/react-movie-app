
import './App.css'
import Favorite from './pages/favorite'
import Home from './pages/home'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <main className='main-content'>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/favorite' element= {<Favorite/>} />

      </Routes>
    </main>
  )
}

export default App
