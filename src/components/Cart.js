import { contexto } from "./CartContext";
import { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CartItem from "./CartItem";
import styled from "styled-components";
import FinalizarForm from "./FinalizarForm"
import {db} from "./../App";
import { collection, addDoc } from "firebase/firestore";
import AgregaCatalogo from "./AgregaCatalogo";

const Carrito_css = styled.main`
  width: 100vw; 
  margin-top: 20vh;
  margin-bottom: 20vh;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  list-style: none;
`;

const Cart = () => {
  const {carrito, removeItemCart, clearCart, setCant } =  useContext(contexto);
  const [sumaTotal, setSumaTotal] = useState(0); 
  const [finalizar, setFinalizar] = useState(false);
  const [ordenEnviada, setOrdenEnviada] = useState(false);

  const deleteClick = (libro) => {
    removeItemCart(libro);
  };


  const precioTotal = () =>{
    let total = 0;    
    const carrito_provisorio = carrito.slice(0);
    carrito_provisorio.forEach(e => {
         total += e.precio * e.cantidad;            
    }); 
    setSumaTotal(total)
  }
  
  const pushCompra = (name, phone, email) =>{
     const ordenCollection = collection(db, 'ordenes');
     const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date+' '+time;
     const librosComprados = carrito.map( e =>{     
         const {id, nombre, autor, precio, cantidad} = e 
         const libroComprado = {id, nombre, autor, cantidad, precio} 
         return libroComprado
     })
     const orden = {
        buyer : {
          name :  name,
          phone : phone,
          email : email
        },
        items : librosComprados,
        date : dateTime,
        Total : '$'+sumaTotal 
     }
     console.log(orden)
     const envia = addDoc(ordenCollection,orden)
     clearCart();
     setFinalizar(false);
     setOrdenEnviada(true);
  }

  const finishSale = () =>{
      setFinalizar(true);
  }

  const cancelarClick = () =>{
    setFinalizar(false);
}


  useEffect(()=>{
        precioTotal() 
  })



  return (
    <Carrito_css>
     
      {ordenEnviada && <p>Felicitaciones usted ha enviado su orden de compras!!</p>}
      {sumaTotal == 0? <div>    
        {!ordenEnviada && <h1>Su carrito esta vacio</h1>}
        <Link to={"/"}>Volver al catalogo</Link> </div>
        :      
        <div> 
       {finalizar ? 
      <div><FinalizarForm precioTotal={sumaTotal} terminarCompra={pushCompra} cancelarClick={cancelarClick}/></div>
       :
        <div>
            <h1>Carrito...</h1>  
            {carrito.map((libro, i) => {
              return (
                <li key={libro.id}>
                  <CartItem libro={libro} deleteClick ={deleteClick} setCant={setCant} />            
                </li>
              );
            })}
            <h3>Precio Total: ${sumaTotal}</h3>
              <button onClick={finishSale}> Finalizar compra </button><br/>
            <button onClick={clearCart}> Eliminar todo el Carrito</button></div> }
        </div>    
       }  
            
      
      
    </Carrito_css>
  );
};

export default Cart;
