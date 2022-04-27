import React from 'react'
import {useEffect} from 'react'
import {useState } from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [cargando, setCargando] = useState(true)
    const [producto, setProducto] = useState({})

    const productoDB =
        { id : 1,
          nombre : 'libro 1',
          precio : 100,
          descripcion : "loremdfsbjhg kfds"
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
            <ItemDetail id={producto.id} nombre={producto.nombre} descripcion={producto.descripcion}/>             
        )

    }
 
}

export default ItemDetailContainer