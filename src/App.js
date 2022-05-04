import Header from "./components/Header"
import Footer from "./components/Footer"
import Carrito from "./components/Carrito"
import ItemListContainer   from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App =() => {
    return (<BrowserRouter>     
                <Header/>
                <main>
                  <Routes>
                    <Route path="/" element={<ItemListContainer/>}></Route>
                    <Route path="/categorias/:nombrecategoria" element={<ItemListContainer/>}></Route>
                    
                    <Route path="/libro/:id" element={<ItemDetailContainer/>}></Route>
                    <Route path="/cart" element={<Carrito/>}></Route>                    
                    
                  </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
    )
  }
  

export default App