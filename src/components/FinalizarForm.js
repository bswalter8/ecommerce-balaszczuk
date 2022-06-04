import { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

const Modal_css = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
`;

const FinalizarForm = ({
  terminarCompra,
  cancelarClick,
  precioTotal,
  user,
}) => {
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");

  const [finalizar, setFinalizar] = useState(false);

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeAdress = (e) => {
    setAdress(e.target.value);
  };

  const compraClick = () => {
    if (adress == "") {
      toast("Debe completar los tres formularios");
    } else {
      setFinalizar(true);
    }
  };

  const cancelarComprar = () => {
    cancelarClick();
  };

  const enviarCompra = () => {
    terminarCompra(phone, adress);
  };

  return (
    <Modal_css>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
      />
      {!finalizar ? (
        <div>
          <p>Ingrese sus datos para finalizar la compra:</p>
          <br />
          <label>Nombre: {user.name}</label>
          <br />
          <label>
            Direccion de envio:{" "}
            <input type="text" onChange={handleChangeAdress} />
          </label>
          <br />
          <label>
            Telefono de contacto:{" "}
            <input type="text" onChange={handleChangePhone} />
          </label>
          <br />
          <label>Email: {user.email}</label>
          <br />
          <button onClick={compraClick}>Terminar Compra</button>
          <button onClick={cancelarComprar}>Cancelar</button>
        </div>
      ) : (
        <div>
          <p>
            Desea enviar la orden de compra con un valor total de ${precioTotal}
            ?
          </p>
          <button onClick={enviarCompra}>
            <p>Aceptar</p>
          </button>
          <button onClick={cancelarComprar}>
            <p>Cancelar</p>
          </button>
        </div>
      )}
    </Modal_css>
  );
};

export default FinalizarForm;
