import styled from 'styled-components'
import ItemList from './ItemList'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import catalogoDB from "./../catalogo.json"

const Main_css = styled.main`
    width: 100vw;
    margin-top: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
`


const Main = (props) => {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true)
  const {nombrecategoria} = useParams();

  useEffect(()=>{
    
    if(nombrecategoria==undefined){
      setCargando(true)
      const promesa = new Promise((res)=>{
        setTimeout(() => {
          res(catalogoDB)   
        }, 2000);   
      })
      .then((contenido)=>{   
        setProductos(contenido) 
        setCargando(false)
      })
      .catch((error)=>{
        console.log("salio todo mal")
      })
    }
    else{
      setCargando(true)
      const promesa = new Promise((res)=>{
        setTimeout(() => {
          res(catalogoDB.filter(libro => nombrecategoria == libro.categoria))
        }, 2000)
      })
      .then((contenido)=>{
        setCargando(false)
        setProductos(contenido)        
      })
      .catch((error)=>{
        console.log("salio todo mal")
      })
    
    }
      
    
  },[nombrecategoria])

  const addItem = (cant) =>{ 

  }

  if (cargando){
    return (
      <Main_css> 
      <p>Cargando...</p>
      </Main_css>  
    )
  } else {
    return(
      <Main_css>      
        <ItemList items={productos} onAdd={addItem}/>
      </Main_css>   
    )
  }

  
}

export default Main