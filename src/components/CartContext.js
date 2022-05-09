import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CartContext = ({ defaultValue = [], children }) => {
  const [carrito, setCarrito] = useState(defaultValue);

  const addItemCart = (libro, cant) => {
    const carrito_provisorio = carrito;
    if (isInCart(libro.id)) {
      carrito_provisorio.forEach((e) => {
        if (e.id == libro.id) {
          e.cantidad += cant;
          e.valor_total += libro.precio * cant;
          setCarrito(carrito_provisorio);
          console.log(carrito);
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
      setCarrito(carrito_provisorio);
      console.log(carrito);
    }
  };
  
  const removeItemCart = (id) => {
    const carrito_provisorio = carrito.filter(e => e.id != id);
    setCarrito(carrito_provisorio);
  }

  const clearCart = () =>{
      setCarrito([]);
  }

  const isInCart = (id) => {
    const libro_encontrado = carrito.find((e) => e.id === id);
    if (libro_encontrado == undefined) {
      return false;
    } else {
      return true;
    }
  };

  return <Provider value={{ addItemCart, removeItemCart, clearCart, carrito }}>
            {children}
        </Provider>;
};

export default CartContext;
