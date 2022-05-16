import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CartContext = ({ defaultValue = [], children }) => {
  const [carrito, setCarrito] = useState(defaultValue);
  const [numCart, setNumCart] = useState(0);
  

  const addItemCart = (libro, cant) => {
    const carrito_provisorio = carrito.slice(0);
    if (isInCart(libro.id)) {
      carrito_provisorio.forEach((e) => {
        if (e.id == libro.id) {
          e.cantidad += cant;
          e.valor_total += libro.precio * cant;
          setCarrito(carrito_provisorio);
          setNumCart(numCart + cant)
          console.log(carrito);
          console.log('numCart:  ' + numCart);
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
      setNumCart(numCart + cant)
      console.log(carrito);
      console.log('numCart:  ' + numCart);
    }
  };
  
  const removeItemCart = (libro) => {
    const carrito_provisorio = carrito.filter(e => {
      if (e.id != libro.id){
        return true
      } else {
        setNumCart(numCart - libro.cantidad)  
        return false 
      }
    });
    
    setCarrito(carrito_provisorio);
   
  }

  const clearCart = () =>{
      setCarrito([]);
      setNumCart(0);
  }

  const setCant = (libro, cantidad) =>{
    const carritoProvisorio = carrito.slice(0);
    carritoProvisorio.forEach( e => {
      if (e.id == libro.id){
        e.cantidad < cantidad?  setNumCart(numCart + (cantidad - libro.cantidad)):  setNumCart(numCart - (libro.cantidad - cantidad))    
        e.cantidad = cantidad;        
      }
    })
    setCarrito(carritoProvisorio);
}

  const isInCart = (id) => {
    const libro_encontrado = carrito.find((e) => e.id === id);
    if (libro_encontrado == undefined) {
      return false;
    } else {
      return true;
    }
  };


  return <Provider value={{ addItemCart, removeItemCart, setCant, clearCart, carrito, numCart }}>
            {children}
        </Provider>;
};

export default CartContext;
