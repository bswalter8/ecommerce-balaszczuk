import Navbar from "./NavBar";
import styled from "styled-components";

const Header_css = styled.header`
  background-color: rgb(231, 222, 222);
  position: fixed;
  top: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  height: 15%;
  width: 100%;
  z-index: 1;
  & a {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  
    padding: 0.2rem;
  }
  & h1 {
    font-family: "BIZ UDPMincho", serif;
    font-size: 2em;
    margin: 0.2em;
  }
  & Nav {
    display: flex;
    justify-content: space-around;
    width: 80vw;
  }
`;

const Header = () => {
  return (
    <Header_css>
      <h1>Libreria de Babel</h1>
      <Navbar header />
    </Header_css>
  );
};

export default Header;
