
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from "react-toastify";


const Modal_css = styled.div`
   display:  "block";
`


const FinalizarForm = ({terminarCompra, cancelarClick, precioTotal}) => {
  
    const [nombre, setNombre] = useState(''); 
    const [telefono, setTelefono] = useState(''); 
    const [email, setEmail] = useState(''); 
    const[finalizar, setFinalizar] = useState(false);

    
    const handleChangeName = (e)=>{
        setNombre(e.target.value);
    }
    const handleChangePhone = (e)=>{
        setTelefono(e.target.value);
    }
    const handleChangeMail = (e)=>{
        setEmail(e.target.value);
    }

    const compraClick = ()=>{
       if (nombre == '' || email =='' || telefono ==''){
        toast(
            "Debe completar los tres formularios"
          );
       } else {
        setFinalizar(true)
       }      
    }

    const cancelarComprar = ()=>{
        cancelarClick()
     }


    const enviarCompra = ()=>{
         terminarCompra(nombre,telefono,email);
     }
   /*  const cancelarEnvio = ()=>{
       setFinalizar(false);
    }*/

    return (
        
            <Modal_css>
                <ToastContainer/>
               {!finalizar ? 
                <div>
                    <p>Ingrese sus datos para finalizar la compra:</p>
                    <label>
                        Nombre:
                        <input type="text" onChange={handleChangeName} />
                    </label>
                    <label>
                        Telefono:
                        <input type="text" onChange={handleChangePhone} />
                    </label>
                    <label>
                        Email:
                        <input type="text" onChange={handleChangeMail} />
                    </label>
                    <button onClick={compraClick}>Terminar Compra</button>
                    <button onClick={cancelarComprar}>Cancelar</button>
                </div>
                :
                <div>
                   <p>Desea enviar la orden de compra con un valor total de ${precioTotal}?</p>
                    <button onClick={enviarCompra}>Aceptar</button>
                    <button onClick={cancelarComprar}>Cancelar</button>
                </div>}
            </Modal_css>        
        
    )
  }
  
  export default FinalizarForm