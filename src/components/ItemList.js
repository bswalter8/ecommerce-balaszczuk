import Item from "./Item"
import ItemCount from "./ItemCount"
import styled from 'styled-components'

const List_css = styled.section`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: center;
    width: 100%;
    list-style:none;
   

`

const ItemList =({items, onAdd}) => {
    return (<List_css>
              {items.map((producto, i)=>{
                return (                
                    <li key={producto.id}> 
                       <Item id={producto.id} nombre={producto.nombre} precio={producto.precio} imagen={producto.img}/>
                      {/* <ItemCount stock="4" initial="1" onAdd={onAdd}/>*/}
                    </li>                                 
               )
                })}
             </List_css>  
    )
  }
  

export default ItemList