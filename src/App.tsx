import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Store from './components/Store'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoopingCartContext'
//import ShoppingCart from './components/ShoppingCart'
//  { /*   <Route path="/cart" element={<ShoppingCart />} />/  *}

function App() {


  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
       

      </Routes>
    </ShoppingCartProvider>

  )
}

export default App
