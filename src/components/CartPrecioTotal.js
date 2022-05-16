import React from 'react'
import { useState,useEffect } from 'react';

const CartPrecioTotal = ({carrito}) => {
    
    const [sumaTotal, setSumaTotal] = useState(0); 


  useEffect(()=>{
    setSumaTotal(()=>{
        let total = 0;
        
        const carrito_provisorio = carrito.slice(0);
     
        carrito_provisorio.forEach(e => {
             total += e.precio * e.cantidad;            
        });
        
        return total;
    })
  },[])

  return (
    <h3>Precio Total: ${sumaTotal}</h3>
  )
}

export default CartPrecioTotal