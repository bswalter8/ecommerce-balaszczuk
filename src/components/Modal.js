
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const Modal_css = styled.div`
   //display: ${props => props.display =="true" ? "block" : "none"};
`


const Modal = ({onSet, text, time}) => {

  useEffect(()=>{
    setTimeout(() => {
        onSet(false) 
      }, time);      
  },[])
    
    return (
        <>  
            <Modal_css>
                 <p>Usted ha agregado {text}</p>
            </Modal_css>        
        </>
    )
  }
  
  export default Modal