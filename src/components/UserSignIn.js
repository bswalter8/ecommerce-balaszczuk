import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { contextoUser } from "./UserContext";
import { ToastContainer, toast } from "react-toastify";
import { app } from "./../App";
import { useState, useContext } from "react";
import styled from "styled-components";
import { db } from "./../App";
import { collection, addDoc } from "firebase/firestore";

const Sign_css = styled.div`
  width: 100vw;
  margin-top: 20vh;
  margin-bottom: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  list-style: none;
  & label{
      display: flex;
      margin: 2rem;
  }
`;


const UserSignIn = () => {
  const { addUser, user } = useContext(contextoUser);
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userCreate, setUserCreate] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setAdress] = useState("");

  const handleChangeName = (e) => {
    setNombre(e.target.value);
  };
  const handleChangePhone = (e) => {
    setTelefono(e.target.value);
  };
  const handleChangeAdress = (e) => {
    setAdress(e.target.value);
  };
  const handleChangeEMail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleLogin = () => {
    if (email == "" || pass == "" || nombre == "") {
      toast("Debe llenar todos los campos");
    } else {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((usuario) => {
          const ordenCollection = collection(db, "usuarios");
          const user = {
            name: nombre,
            phone: telefono,
            email: email.toLocaleLowerCase(),
            direccion: direccion,
            compras: "",
          };
          const envia = addDoc(ordenCollection, user);

          addUser(usuario.user);
          setUserCreate(true);
        })
        .catch((error) => {
          toast("El usuario ya existe o su password debe contener al menos 6 caracteres");
        });
    }
  };

  return (
    <Sign_css>
      {userCreate ? (
        <p>Usuario creado con exito!</p>
      ) : (
        <div>
          <p>Ingrese sus datos para registrar un nuevo usuario: </p>
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
            <input type="text" onChange={handleChangeEMail} />
          </label>
          <label>
            Direccion:
            <input type="text" onChange={handleChangeAdress} />
          </label>
          <label>
            Password:
            <input type="password" onChange={handleChangePass} />
          </label>

          <ToastContainer position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={true}
            />
          <button onClick={handleLogin}>Crear Usuario</button>
        </div>
      )}
    </Sign_css>
  );
};

export default UserSignIn;
