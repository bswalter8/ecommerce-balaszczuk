import { useState } from 'react'
import styled from 'styled-components'

const Itemcount_css = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    border: solid;
    padding: 0.4rem;
    font-size: 1rem;
    align-items: center;
    
`

const Items_css = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding-bottom: .2rem;
    
`

const Button_css = styled.button`
    font-size: .9rem;
    padding: .2rem;
    color: black;
    background-color: transparent;
`

const ItemCount = ({stock, initial, onAdd}) => {

    initial = parseInt(initial)    
    stock = parseInt(stock)
    const [contador, setContador] = useState(initial);
    
    const handleClick = (direction) =>{      

        if (direction == "+"){
            if (contador == stock){setContador(stock)}
            else {setContador(contador + 1)}
        } else {
            if (contador == 1){setContador(1)}
            else if(contador == 0){setContador(0)} 
            else {setContador(contador - 1)}
        }        
    }

    const handleClick_add = () =>{
        if (contador != 0){onAdd(contador)}        
    }

    return (
             <Itemcount_css>
                 <p>Stock: {stock}</p>
                 <Items_css>
                    <Button_css onClick={() => handleClick("+")}>+</Button_css>
                    <p>Cantidad: {contador}</p>                  
                    <Button_css onClick={() => handleClick("-")}>-</Button_css>
                 </Items_css>
                 <Button_css onClick={handleClick_add} >Agregar al carrito</Button_css>
             </Itemcount_css>           
        
    )
  }
  
  export default ItemCount