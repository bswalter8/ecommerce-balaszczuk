
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";
import styled from 'styled-components'


const Carrito_css = styled.button`
    background: url('https://api.iconify.design/akar-icons/cart.svg') no-repeat center center / contain;
    background-size: contain;
    cursor: pointer;
    display: inline-block;
    height: 4.5rem;
    width: 5rem;
`
 
const CartWidget = () => {
  const { numCart } = useContext(contexto);
  return (
    <Link to={"/cart"}>
        <Carrito_css/>   
        {numCart != 0 && <p>{numCart}</p>}
        
    </Link>
  )
}

export default CartWidget