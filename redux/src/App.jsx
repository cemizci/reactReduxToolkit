import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './Pages/Product';
import Header from './Components/Header'

function App() {


  return (
    <div className=''>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Product/>}/>
        </Routes>
      </Router>
      </div>
  )
}

export default App
