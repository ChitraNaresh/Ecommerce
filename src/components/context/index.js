import React from 'react'

const CartContext = React.createContext({
  count: 0,
  addItem: () => {},
  removeItem: () => {},
})

export default CartContext
