import { useContext } from "react";
import { contexto } from "./CartContext";
import styled from "styled-components";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item_css = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  background-color: #e9ebea;
  border-radius: 2px;
  box-shadow: 1px 1px #e7cfcf;
  font-size: 1.1rem;
  z-index: 0;
  margin: 2rem;
  padding: 0.8rem;
  & img {
    width: 200px;
    height: 300px;
  }
`;
const ItemDetail = ({ libro }) => {
  const [cantidadAdd, setCantidadAdd] = useState();
  const [VerCart, setVerCart] = useState(false);
  const { addItemCart } = useContext(contexto);

  const addItem = (cant) => {
    if (!cant == 0) {
      setCantidadAdd(cant);
      addItemCart(libro, cant);
      setVerCart(true);
      toast(
        "Usted ha agregado" + " " + cant + " libros a su carrito de compras"
      );
    }
  };

  if (!VerCart) {
    return (
      <Item_css>
        <img src={require(`./../img/${libro.img}`)} />
        <p>Nombre: {libro.nombre}</p>
        <p>Precio: ${libro.precio}</p>
        <ItemCount
          stock="4"
          initial={1}
          onAdd={addItem}
          textoBoton="Agregar al carrito"
          muestraStock={true}
        />
      </Item_css>
    );
  } else {
    return (
      <Item_css>
        <img src={require(`./../img/${libro.img}`)} />
        <p>Nombre: {libro.nombre}</p>
        <p>Precio: ${libro.precio}</p>
        <p> Usted ha agregado {cantidadAdd} libro a su carrito de compras </p>
        <ToastContainer position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={true}
            />
        <Link to={"/cart"}>Ver el carrito</Link>
      </Item_css>
    );
  }
};

export default ItemDetail;
