import React from 'react'
import styled from 'styled-components'
import {useEffect} from 'react'
import {useState } from 'react'
import ItemDetail from './ItemDetail'

const DetailContainer_css = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
    background-color: aqua;
`

const ItemDetailContainer = () => {

    const [cargando, setCargando] = useState(true)
    const [producto, setProducto] = useState({})

    const productoDB =
        {
          "id": 1,
          "nombre": "La Odisea",
          "precio":250, 
          "autor" : "Homero",
          "categoria" : "clasicos",
          "img" : "laodisea.jpeg",
          "stock": 8,
          "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ipsum ipsa, minus temporibus sint veritatis consectetur, ut recusandae libero qui cupiditate modi labore id consequatur perferendis quaerat repellat deleniti quos."
      }
      ;

    useEffect(()=>{
        const getItem = new Promise((res)=>{
          setTimeout(() => {
            res(productoDB)   
          }, 2000);   
        })
        .then((contenido)=>{   
          setProducto(contenido) 
          setCargando(false)
         
        })
        .catch((error)=>{
          console.log("salio todo mal")
        })
      },[])

    if (cargando){
        return (
            <div>Cargando...</div>
          )
    }else {
        return (
          <DetailContainer_css>
            <ItemDetail id={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} imagen={producto.img}/>  
          </DetailContainer_css>           
        )

    }
 
}

export default ItemDetailContainer