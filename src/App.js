import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ItemListContainer   from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContext from "./components/CartContext"

const App =() => {
    return (<BrowserRouter>   
                <CartContext>  
                    <Header/>
                    <main>
                      <Routes>
                        <Route path="/" element={<ItemListContainer/>}></Route>
                        <Route path="/categorias/:nombrecategoria" element={<ItemListContainer/>}></Route>                        
                        <Route path="/libro/:id" element={<ItemDetailContainer/>}></Route>
                        <Route path="/cart" element={<Cart/>}></Route>                    
                        
                      </Routes>
                    </main>
                </CartContext> 
                <Footer/>
                
            </BrowserRouter>
    )
  }
  

export default App