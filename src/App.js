import GlobalStyles from './Styled/Global.js'
import { Row } from './Styled/Row.styled.js'
import {CartSection} from "./Styled/CartSection.styled.js"
import { ThemeProvider } from 'styled-components' 
import  React, {useState, useEffect} from 'react'

import Header from './Components/Header/Header.js'
import Product from './Components/Product/Product.js'
import Cart from  './Components/Cart/Cart.js'

const apiUrl = 'https://api.npoint.io/94fc4a0107a3eb588fd1'

export default function App() {
  const theme = {
      mobile: '768px',
      tablet: '1394px',
      smallerDevices: '477px'
  }

  const [procduts, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [root, changeRoot] = useState("home")
  console.log("root ", root)

  useEffect(()=> {
      fetch(`${apiUrl}/items`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  },[])

  const onAddToCard = (productID, productName, productPrice, productImage) => {
    function addProduct () {
        const NewCartProducts = cartProducts.concat({id: productID, name: productName, price: productPrice, imageUrl: productImage})
        setCartProducts(NewCartProducts)
    }
    addProduct()
  } 

  return (
      <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            <Header changeRoot={changeRoot} cartProducts={cartProducts}/>
            <Row>
              {
                root == 'home' ?
                  <section> 
                    {
                      procduts.map( product => ( 
                                       
                          <Product 
                            key={product.id}
                            product={product}
                            onAddToCard={onAddToCard}
                          />
                      ))
                    }
                  </section>
                : root == "cart"?
                  <CartSection>
                    <Cart cartProducts={cartProducts} changeRoot={changeRoot} onAddToCard={onAddToCard}/>
                  </CartSection>
                : <h1>dsdsdsd</h1>
              }                             
            </Row>
        </>
      </ThemeProvider>
  );
}

