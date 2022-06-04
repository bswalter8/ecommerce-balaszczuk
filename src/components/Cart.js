import { contexto } from "./CartContext";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import styled from "styled-components";
import FinalizarForm from "./FinalizarForm";
import { db } from "./../App";
import { collection, addDoc, doc } from "firebase/firestore";
import { contextoUser } from "./UserContext";
import { ToastContainer, toast } from "react-toastify";

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
  const { carrito, removeItemCart, clearCart, setCant } = useContext(contexto);
  const { addUser, user } = useContext(contextoUser);
  const [sumaTotal, setSumaTotal] = useState(0);
  const [finalizar, setFinalizar] = useState(false);
  const [ordenEnviada, setOrdenEnviada] = useState(false);

  const deleteClick = (libro) => {
    removeItemCart(libro);
  };

  const precioTotal = () => {
    let total = 0;
    const carritoProvisorio = carrito();
    carritoProvisorio.forEach((e) => {
      total += e.precio * e.cantidad;
    });
    setSumaTotal(total);
  };

  const pushCompra = (phone, direccion) => {
    const ordenCollection = collection(db, "ordenes");

    const today = new Date();
    const date =
      today.getFullYear() + "-" +
      (today.getMonth() + 1) + "-" + today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    const librosComprados = carrito().map((e) => {
      const { id, nombre, autor, precio, cantidad } = e;
      const libroComprado = { id, nombre, autor, cantidad, precio };
      return libroComprado;
    });
    const orden = {
      buyer: {
        name: user.name,
        phone: phone,
        email: user.email,
      },
      deliveryAdress: direccion,
      userId: user.id,
      items: librosComprados,
      date: dateTime,
      Total: "$" + sumaTotal,
    };

    const envia = addDoc(ordenCollection, orden);
    clearCart();
    setFinalizar(false);
    setOrdenEnviada(true);
  };

  const finishSale = () => {
    user.length != 0
      ? setFinalizar(true)
      : toast("Debe estar logueado para poder finalizar su compra");
  };

  const cancelarClick = () => {
    setFinalizar(false);
  };

  useEffect(() => {
    precioTotal();
  });

  return (
    <Carrito_css>
       <ToastContainer position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={true}
            />
      {ordenEnviada && (
        <p>Felicitaciones usted ha enviado su orden de compras!!</p>
      )}
      {sumaTotal == 0 ? (
        <div>
          {!ordenEnviada && <h1>Su carrito esta vacio</h1>}
          <Link to={"/"}>Volver al catalogo</Link>{" "}
        </div>
      ) : (
        <div>
          {finalizar ? (
            <div>
              <FinalizarForm
                precioTotal={sumaTotal}
                terminarCompra={pushCompra}
                cancelarClick={cancelarClick}
                user={user}
              />
            </div>
          ) : (
            <div>
              <h1>Carrito...</h1>
              {carrito().map((libro, i) => {
                return (
                  <li key={libro.id}>
                    <CartItem
                      libro={libro}
                      deleteClick={deleteClick}
                      setCant={setCant}
                    />
                  </li>
                );
              })}
              <h3>Precio Total: ${sumaTotal}</h3>
              <button onClick={finishSale}> Finalizar compra </button>
              <br />
              <button onClick={clearCart}> Eliminar todo el Carrito</button>
            </div>
          )}
        </div>
      )}
    </Carrito_css>
  );
};

export default Cart;
