import {useContext} from 'react'
import Cartcontext from '../context'
import './index.css'

const EachProduct = ({eachItem}) => {
  const {image, name, price, weight} = eachItem
  const {addItem, removeItem} = useContext(Cartcontext)
  const addItemToCart = () => {
    addItem()
  }
  const removeItemToCart = () => {
    removeItem()
  }
  return (
    <li className="each-product-list">
      <div className="icons-card">
        <button type="button" className="add-icons" onClick={removeItemToCart}>
          -
        </button>
        <button type="button" className="add-icons" onClick={addItemToCart}>
          +
        </button>
      </div>
      <img src={image} alt="flower" className="product-img" />
      <h2 className="list-product-name">{name}</h2>
      <h5 className="price">{price}</h5>
      <p className="product-weight">{weight}</p>
    </li>
  )
}

export default EachProduct
