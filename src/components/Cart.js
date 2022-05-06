import { contexto } from "./CartContext";
import { useContext } from "react";
import styled from 'styled-components'

const Carrito_css = styled.main`
    width: 100vw;
    height: 80vh;

    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`


const Cart = () => {

    const {cantidad_total, precio_total, carrito} = useContext(contexto)

  return (
      <Carrito_css>
           <h1>Carrito...</h1>
           <h3>Precio Total: ${precio_total}</h3>
      </Carrito_css> 
  )
}

export default Cart