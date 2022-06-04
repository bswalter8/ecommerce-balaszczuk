import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";
import styled from "styled-components";

const Carrito_css = styled.button`
  background: url("https://api.iconify.design/akar-icons/cart.svg") no-repeat
    center center / contain;
  background-size: contain;
  cursor: pointer;
  display: inline-block;
  height: 4.5rem;
  width: 5rem;
`;

const Carrito_Items_css = styled.div`
  display: flex;
  flex-direction: row;
`;

const Numero_css = styled.p`
  font-size: 1.4rem;
`;

const CartWidget = () => {
  const { numCart } = useContext(contexto);
  return (
    <Carrito_Items_css>
      <Link to={"/cart"}>
        <Carrito_css />
      </Link>
      {numCart != 0 && <Numero_css>{numCart}</Numero_css>}
    </Carrito_Items_css>
  );
};

export default CartWidget;
