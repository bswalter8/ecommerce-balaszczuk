import React from "react";
import styled from "styled-components";
import ItemCount from "./ItemCount";

const Item_css = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: 20vh;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  background-color: #e9ebea;
  border-radius: 2px;
  box-shadow: 1px 1px #e7cfcf;
  font-size: 1.1rem;
  margin: 2rem;
  padding: 0.8rem;
  & img {
    width: 70px;
    height: 100px;
  }
  & p {
    margin: 1rem;
    width: 100px;
    text-align: center;
  }
  & .elimiar {
    width: 100px;
  }
`;

const CartItem = ({ libro, deleteClick, setCant }) => {
  const handleClick = () => {
    deleteClick(libro);
  };

  const handleCantidad = (cantidad) => {
    setCant(libro, cantidad);
  };

  return (
    <Item_css>
      <img src={require(`./../img/${libro.img}`)} />
      <p>{libro.nombre}</p>
      <p>{libro.autor}</p>
      <p>Valor ${libro.precio}</p>
      <p>Cantidad {libro.cantidad}</p>
      <p>Subtotal ${libro.precio * libro.cantidad}</p>
      <button className="elimiar" onClick={handleClick}>
        {" "}
        Eliminar del Carrito
      </button>
      <ItemCount
        stock={libro.cantidad + 4}
        initial={libro.cantidad}
        onAdd={handleCantidad}
        textoBoton="Modificar cantidad"
      />
    </Item_css>
  );
};

export default CartItem;
