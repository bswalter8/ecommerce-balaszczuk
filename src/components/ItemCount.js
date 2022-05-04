import { useState } from 'react'
import styled from 'styled-components'
import Modal from "./Modal"

const Itemcount_css = styled.div`
    display: flex;
    flex-direction: column;

    width: 20%;
    
    padding: 0.4rem;
    font-size: .8em;
    align-items: center;
    text-align: center ;
`

const Items_css = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    font-size: .9rem;
    justify-content: space-around;  
    padding-bottom: .2rem;
   
    
`

const Button_css = styled.button`
    font-size: .9rem;
    padding: .2rem;
    margin-left: .2rem;
    margin-right: .2rem;   
    width: max-content;
    color: black;
    background-color: transparent;
`

const ItemCount = ({stock, initial, onAdd }) => {

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
       onAdd(contador)       
    }

    return (          
        <Itemcount_css>
            <p>Stock {stock}</p>
            <Items_css>
               <Button_css onClick={() => handleClick("+")}>+</Button_css>
               <p>Cantidad {contador}</p>                  
               <Button_css onClick={() => handleClick("-")}>-</Button_css>
            </Items_css>
            <Button_css onClick={handleClick_add} >Agregar al carrito</Button_css>
           
        </Itemcount_css>                
    )
 
  }
  
  export default ItemCount