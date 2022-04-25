import styled from 'styled-components'
import ItemList from './ItemList'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { useEffect } from 'react'

const Main_css = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;

`


const Main = (props) => {

  const [productos, setProductos] = useState([]);
  
  const productosDB =[
    { id : 1,
      nombre : 'libro 1',
      precio : 100
    },
    { id : 2,
      nombre : 'libro 2',
      precio : 150
    },
    { id : 3,
      nombre : 'libro 3',
      precio : 200
    }

  ];

  useEffect(()=>{
    const promesa = new Promise((res)=>{
      setTimeout(() => {
        res(productosDB)   
      }, 2000);   
    })
    .then((contenido)=>{   
      setProductos(contenido) 
      console.log(contenido)
    })
    .catch((error)=>{
      console.log("salio todo mal")
    })
  },[])

  const addItem = (cant) =>{ 

  }

  return(
    <Main_css>      
     {/* <p>{props.greeting}</p>
       <ItemCount stock="4" initial="1" onAdd={addItem}/>
      <ul>
        {productos.map((e, i)=>{

          return <li key={e.id}>{e.nombre}</li>
        })}
      </ul>*/}
      
      <ItemList items={productos}/>
    </Main_css>   
  )
}

export default Main