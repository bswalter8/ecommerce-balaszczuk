import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CartContext = ({children }) => {
  const [numCart, setNumCart] = useState(0);

  const addItemCart = (libro, cant) => {
    const carrito_provisorio = carrito();

    if (isInCart(libro.id)) {
      carrito_provisorio.forEach((e) => {
        if (e.id == libro.id) {
          e.cantidad += cant;
          e.valor_total += libro.precio * cant;

          guardarLocalNumCarrito(numCart + cant);

          guardarLocal(carrito_provisorio);
          return;
        }
      });
    } else {
      const nuevo_libro = {
        ...libro,
        cantidad: cant,
        valor_total: libro.precio,
      };

      carrito_provisorio.push(nuevo_libro);
      guardarLocal(carrito_provisorio);

      guardarLocalNumCarrito(numCart + cant);
    }
  };

  const removeItemCart = (libro) => {
    const carrito_provisorio = carrito().filter((e) => {
      if (e.id != libro.id) {
        return true;
      } else {
        guardarLocalNumCarrito(numCart - libro.cantidad);
        return false;
      }
    });

    guardarLocal(carrito_provisorio);
  };

  const clearCart = () => {
    guardarLocal([]);

    guardarLocalNumCarrito(0);
  };

  const setCant = (libro, cantidad) => {
    const carritoProvisorio = carrito();
    carritoProvisorio.forEach((e) => {
      if (e.id == libro.id) {
        if (e.cantidad < cantidad) {
          guardarLocalNumCarrito(numCart + (cantidad - libro.cantidad));
        } else {
          guardarLocalNumCarrito(numCart - (libro.cantidad - cantidad));
        }
        e.cantidad = cantidad;
      }
    });
    guardarLocal(carritoProvisorio);
  };

  const isInCart = (id) => {
    const carritoProvisorio = carrito();
    if (carritoProvisorio != null) {
      const libro_encontrado = carritoProvisorio.find((e) => e.id === id);

      if (libro_encontrado == undefined) {
        return false;
      } else {
        return true;
      }
    }
  };

  const guardarLocal = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  const guardarLocalNumCarrito = (num) => {
    setNumCart(num);
    localStorage.setItem("N_carrito", JSON.stringify(num));
  };

  const getLocalNumCarrito = () => {
    setNumCart(JSON.parse(localStorage.getItem("N_carrito")));
  };

  const carrito = () => {
    const libros = JSON.parse(localStorage.getItem("carrito"));
    if (libros == null) {
      return [];
    } else {
      return libros;
    }
  };

  return (
    <Provider
      value={{
        addItemCart,
        removeItemCart,
        setCant,
        clearCart,
        carrito,
        numCart,
        getLocalNumCarrito,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartContext;
