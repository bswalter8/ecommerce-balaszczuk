import { Link } from "react-router-dom";
import { contexto } from "./CartContext";
import CartWidget from "./CartWidget";
import UsersWidget from "./UsersWidget";
import { useEffect, useContext } from "react";
import styled from "styled-components";

const Link_css = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  width: 50vw;
`;

const Footer_css = styled.div`
  padding-left:1rem;
  padding-right: 3rem;
  padding-bottom: .2rem;
  display: flex;
  justify-content: space-between;
  background-color: rgb(231, 222, 222);
  width: 96vw;

`;


const Navbar = (props) => {
  const { getLocalNumCarrito } = useContext(contexto);

  useEffect(() => {
    getLocalNumCarrito();
  }, []);

  return props.header ? (
    <nav>
       <Link_css>
          <Link to={"/"}>Todo el catalogo</Link>
          <Link to={"/categorias/clasicos"}>Clasicos</Link>
          <Link to={"/categorias/poesia"}>Poesia</Link>
          <Link to={"/categorias/modernos"}>Modernos</Link>
          <Link to={"/categorias/contemporaneos"}>Contemporaneos</Link>
        </Link_css> 
        <UsersWidget />
        <CartWidget />
       
     
    </nav>
  ) : (
    <Footer_css>
      <p>Copyrigth - Todos los derechos reservados</p>
      <h3>Libreria de Babel</h3>
      </Footer_css>
  );
};

export default Navbar;
