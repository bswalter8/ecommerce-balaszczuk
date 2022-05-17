import React from 'react'
import styled from 'styled-components'
import {useEffect} from 'react'
import {useState } from 'react'
import ItemDetail from './ItemDetail'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import catalogoDB from "./../catalogo.json"
import {db} from "./../App";
import { collection, getDoc, doc, getDocs, addDoc, query, where } from 'firebase/firestore'

const DetailContainer_css = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 200;
    margin-top: 15vh;
    align-items: center;
    font-size: 3.5rem;
  
`

const ItemDetailContainer = () => {

    const [cargando, setCargando] = useState(true)
    const [libro_elegido, setLibro] = useState({})
    const {id} = useParams();
    
 

    useEffect(()=>{
      

      if(id == undefined){
        console.log("todo mal")
      } else {
        const librosCollection = collection(db,"libros");
        const resultadoLibro = doc(librosCollection,id);
        const consultaLibro = getDoc(resultadoLibro);
        consultaLibro
        .then((res)=>{   
         
            const libroConID = {
              ...res.data(),
              id 
            }
           console.log(res)
          setLibro(libroConID) 
          setCargando(false)
         
        })
        .catch((error)=>{
          console.log("salio todo mal")
        })        
      }


    /*  if(id == undefined){
        console.log("todo mal")
      } else {
       
        const getItem = new Promise((res)=>{
          setTimeout(() => {
            res(catalogoDB.find(libro => id == libro.id))   
          }, 2000);   
        })
        .then((contenido)=>{   
         
          setLibro(contenido) 
          setCargando(false)
         
        })
        .catch((error)=>{
          console.log("salio todo mal")
        })        
      }*/
        
      },[id])

    if (cargando){
        return (
            <div>Cargando...</div>
          )
    }else {
        return (
          <DetailContainer_css>
            <ItemDetail libro={libro_elegido}/>  
          
          </DetailContainer_css>           
        )

    }
 
}

export default ItemDetailContainer