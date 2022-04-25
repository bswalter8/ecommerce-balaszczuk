import Item from "./Item"

const ItemList =({items}) => {
    return (<>
              {items.map((producto, i)=>{
                return (
                    <li key={producto.id}> <Item id={producto.id} nombre={producto.nombre} precio={producto.precio}/></li>
               )
                })}
            </>
    )
  }
  

export default ItemList