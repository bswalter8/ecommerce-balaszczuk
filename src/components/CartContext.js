import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CartContext = ({ defaultValue = [], children }) => {
  const [carrito, setCarrito] = useState(defaultValue);

  const addItemCart = (libro) => {
    if (isInCart(libro)){
        console.log(carrito)
    } else {
        setCarrito(libro)
        console.log(carrito)
    }
  };

  const isInCart = (id) => {
        const libro_encontrado = carrito.find((e) => e.id === id);
        if (libro_encontrado == undefined){
            return false;
        } else {
            return true;
        }
        

  };

  return <Provider value={{ addItemCart, carrito }}>
            {children}
        </Provider>;
};

export default CartContext;
