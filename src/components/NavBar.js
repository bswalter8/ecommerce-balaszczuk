//import React from 'react'
import Carrito from './Carrito'


const Navbar = (props) => {
  console.log(props)
  if (props.header){
    return (
      <nav>
          <a href=""> Clasicos</a> 
          <a href=""> Poesia</a>
          <a href=""> Modernos</a>
          <a href=""> Contemporaneos</a>    
          <Carrito/>           
      </nav> 
)

  } else {
    return (
      <nav>
          <p>Copyrigth - Todos los derechos reservados</p>
          <h3>Libreria de Babel</h3>           
      </nav> 
 )

  }

}

export default Navbar