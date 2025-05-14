// Components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Style
  import './App.css'
//.

// Pages
  import Home from './pages/Home'
 import Vocabulary from './pages/vocabulary'
  




function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/vocabulary' element={<Vocabulary/>} />
          
                
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
