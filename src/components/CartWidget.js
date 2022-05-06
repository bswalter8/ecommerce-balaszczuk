
import { Link } from "react-router-dom";
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
    
  return (
    <Link to={"/cart"}>
        <Carrito_css/>   
    </Link>
  )
}

export default CartWidget