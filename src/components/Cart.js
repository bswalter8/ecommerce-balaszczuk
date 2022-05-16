import { contexto } from "./CartContext";
import { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CartItem from "./CartItem";
import styled from "styled-components";

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
  
  const deleteClick = (libro) => {
    removeItemCart(libro);
  };


  const precioTotal = () =>{
    let total = 0;    
    const carrito_provisorio = carrito.slice(0);
    carrito_provisorio.forEach(e => {
         total += e.precio * e.cantidad;            
    }); 
    setSumaTotal( total)
  }
  
  useEffect(()=>{
        precioTotal() 
  })


  return (
    <Carrito_css>
      {sumaTotal == 0 ? <><h1>Su carrito esta vacio</h1> <Link to={"/"}>Volver al catalogo</Link> </>:<> 
      <h1>Carrito...</h1>  
      {carrito.map((libro, i) => {
        return (
          <li key={libro.id}>
            <CartItem libro={libro} deleteClick ={deleteClick} setCant={setCant} />            
          </li>
        );
      })}
      <h3>Precio Total: ${sumaTotal}</h3>
       <button onClick={clearCart}> Eliminar todo el Carrito</button></> }
      
      
    </Carrito_css>
  );
};

export default Cart;
