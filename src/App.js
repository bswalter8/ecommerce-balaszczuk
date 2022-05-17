import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ItemListContainer   from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContext from "./components/CartContext"


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3JAgi5lJP5QvvGQpeyjFB7-Qub8tgjbE",
  authDomain: "libreria-babel.firebaseapp.com",
  projectId: "libreria-babel",
  storageBucket: "libreria-babel.appspot.com",
  messagingSenderId: "99982264744",
  appId: "1:99982264744:web:80f3a2ad0a3ba7810fb59d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

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