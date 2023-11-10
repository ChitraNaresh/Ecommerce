import {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CartContext from './components/context'

const App = () => {
  const [cartCount, setCartCount] = useState(0)
  const addItem = () => {
    setCartCount(cartCount + 1)
  }
  const removeItem = () => {
    if (cartCount) {
      setCartCount(prev => prev - 1)
    }
  }
  return (
    <CartContext.Provider value={{count: cartCount, addItem, removeItem}}>
      <Navbar />
      <Home />
    </CartContext.Provider>
  )
}

export default App
