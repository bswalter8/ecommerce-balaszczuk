import React from 'react'
import catalogoDB from "./../catalogo.json"
import { collection, addDoc } from "firebase/firestore";
import {db} from "./../App";

function AgregaCatalogo() {


  const subirLibros =()=>{
    const nuevoCatalogo = catalogoDB.slice(0)
    const ordenCollection = collection(db, 'catalogoCompleto');
  

    nuevoCatalogo.forEach((e)=>{
        delete e.id
    })

    nuevoCatalogo.forEach((libro)=>{    
        const envia = addDoc(ordenCollection,libro)
    })
    console.log('catalogo agregado')
    }

  return (
    <div>
        {subirLibros()}   
    </div>
   
  )
}

export default AgregaCatalogo