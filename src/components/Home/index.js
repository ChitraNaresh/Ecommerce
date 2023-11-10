import {useState, useEffect} from 'react'
import EachProduct from '../EachProduct'
import './index.css'

const Home = () => {
  console.log(1)
  const [allProducts, setProducts] = useState([])

  const getData = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d',
    )
    const data = await response.json()
    const {categories} = data
    console.log(categories)
    setProducts(categories)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="home-card">
      {allProducts.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <div className="side-bar">
          <ul className="list-card">
            {allProducts.map((eachProduct, i) => {
              const {name} = eachProduct
              return (
                <>
                  <li className="each-product-name" key={name}>
                    {name}
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      )}
      {allProducts.length === 0 ? (
        <h1>""</h1>
      ) : (
        <div className="content-card">
          <div className="content-list-card">
            {allProducts.map((eachProduct, i) => {
              const {name, products} = eachProduct
              return (
                <>
                  <div className="each-row-container">
                    <h1 className="product-section-heading">{`${name} >`}</h1>
                    <ul className="each-row-products">
                      {products.map(eachItem => (
                        <EachProduct key={eachItem.id} eachItem={eachItem} />
                      ))}
                    </ul>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
