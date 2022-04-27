import styled from 'styled-components'
import ItemList from './ItemList'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { useEffect } from 'react'

const Main_css = styled.main`
    width: 100vw;
    margin-top: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
`


const Main = (props) => {

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true)

  const productosDB =[
    {
      "id": 1,
      "nombre": "La Odisea",
      "precio":250, 
      "autor" : "Homero",
      "categoria" : "clasicos",
      "img" : "laodisea.jpeg",
      "stock": 8

  },
  {
      "id": 2,
      "nombre": "Crimen y Castigo",
      "precio":200, 
      "autor" :  "Dostoievski",
      "categoria" : "clasicos",
      "img" : "crimenycastigo.jpeg",
      "stock": 4

  },

  {
      "id": 3,
      "nombre": "El Proceso",
      "precio":150, 
      "autor" :  "Kafka",
      "categoria" : "modernos",
      "img" : "elproceso.jpeg",
      "stock": 2

  },
  {
      "id": 4,
      "nombre": "Divina Comedia",
      "precio":520, 
      "autor" : "Dante Alighieri",
      "categoria" :  "clasicos",
      "img" : "divinacomedia.jpeg",
      "stock": 1

  },
  {
    "id":5,
    "nombre": "En el Camino",
    "precio":260, 
    "autor" : "Jack Kerouac",
    "categoria" : "contemporaneos",
    "img" : "enelcamino.jpeg",
    "stock": 5

},
{
    "id": 6,
    "nombre": "Las flores del mal",
    "precio":120, 
    "autor" : "Charles Baudelaire",
    "categoria" :  "poesia",
    "img" : "lasflores.jpeg",
    "stock": 0

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
      setCargando(false)
      console.log(contenido)
    })
    .catch((error)=>{
      console.log("salio todo mal")
    })
  },[])

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