import {BiCart} from 'react-icons/bi'
import {useContext} from 'react'
import Cartcontext from '../context'
import './index.css'

const Navbar = () => {
  const {count} = useContext(Cartcontext)
  return (
    <nav className="nav-card">
      <div className="app-name">
        <h2 className="app-head">E-Commerce</h2>
      </div>
      <div className="cart-image-card">
        <BiCart className="cart" />
        <p className="count">{count}</p>
      </div>
    </nav>
  )
}

export default Navbar
