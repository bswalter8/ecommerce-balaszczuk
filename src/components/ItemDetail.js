import React from 'react'
import styled from 'styled-components'


const Item_css = styled.div`
    display : flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 1rem;
   background-color: #e9ebea;
   border-radius: 2px;
   box-shadow: 1px 1px #e7cfcf;
   font-size: 1.1rem;
   margin: 2rem;
   padding: 0.8rem;
   & img{
    width: 200px;
    height: 300px;
  }


`
const ItemDetail = ({libro}) => {
  return (<Item_css>
          <img src={require(`./../img/${libro.img}`)}/>
          <p>Nombre: {libro.nombre}</p>
          <p>Precio: ${libro.precio}</p>

        </Item_css>
  )
}

export default ItemDetail