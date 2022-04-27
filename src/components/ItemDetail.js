import React from 'react'
import styled from 'styled-components'


const Item_css = styled.div`
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
    margin: 2rem ;
  }


`
const ItemDetail = ({nombre, precio, imagen, descripcion}) => {
  return (<Item_css>
          <div>Nombre: {nombre}</div>
          <div>Precio: {precio}</div>
          <div>Descripcion: {descripcion}</div>
          <img src={require(`./../img/${imagen}`)}/>
        </Item_css>
  )
}

export default ItemDetail