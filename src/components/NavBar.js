import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
/*import Carrito from './Carrito'*/


const Navbar = (props) => {
  if (props.header){
    return (
      <nav>
          <Link to={"/"}>Todo el catalogo</Link>
          <Link to={"/categorias/clasicos"}>Clasicos</Link>
          <Link to={"/categorias/poesia"}>Poesia</Link>
          <Link to={"/categorias/modernos"}>Modernos</Link>
          <Link to={"/categorias/contemporaneos"}>Contemporaneos</Link>
          <CartWidget/>           
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