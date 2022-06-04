import Header from "./components/Header"
import Cart from "./components/Cart"
import User from "./components/User"
import UserSignIn from "./components/UserSignIn"
import Nav from "./components/NavBar"
import ItemListContainer   from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContext from "./components/CartContext"
import UserContext from "./components/UserContext"

import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA3JAgi5lJP5QvvGQpeyjFB7-Qub8tgjbE",
  authDomain: "libreria-babel.firebaseapp.com",
  projectId: "libreria-babel",
  storageBucket: "libreria-babel.appspot.com",
  messagingSenderId: "99982264744",
  appId: "1:99982264744:web:80f3a2ad0a3ba7810fb59d"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


const App =() => {
    return (<BrowserRouter>   
                <CartContext>  
                  <UserContext>
                      <Header/>
                      <main>
                        <Routes>
                          <Route path="/" element={<ItemListContainer/>}></Route>
                          <Route path="/categorias/:nombrecategoria" element={<ItemListContainer/>}></Route>                        
                          <Route path="/libro/:id" element={<ItemDetailContainer/>}></Route>
                          <Route path="/cart" element={<Cart/>}></Route>                    
                          <Route path="/user" element={<User/>}></Route>   
                          <Route path="/user/signin" element={<UserSignIn/>}></Route> 
                        </Routes>
                      </main>
                  
                      <Nav footer/>
                  </UserContext>
                </CartContext>  
            </BrowserRouter>
    )
  }
  

export default App