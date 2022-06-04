import React from "react";
import styled from "styled-components";

import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useState, useContext } from "react";
import { contextoUser } from "./UserContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import UserOrdenlist from "./UserOrdenlist";
import { app } from "./../App";

const User_css = styled.div`
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

const User = () => {
  const { addUser, logOut, user } = useContext(contextoUser);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const auth = getAuth(app);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((usuario) => {
        addUser(usuario.user);
      })
      .catch(() => {
        toast("Mail o Password invalido");
      });
  };

  const handleLogOut = () => {
    logOut();
  };

  return (
    <User_css>
      {user == 0 ? (
        <div>
          <p>Ingrese sus datos para ingresar: </p>
          <label>
            Email:
            <input type="text" onChange={handleChangeEmail} />
          </label>
          <label>
            Pass:
            <input type="password" onChange={handleChangePass} />
          </label>

          <button onClick={handleLogin}>Login</button>
          <ToastContainer position="top-center"
            autoClose={1000}
            hideProgressBar={true}
            newestOnTop={true}
            />
          <p>Si no esta registrado ingrese aqui: </p>
          <Link to={"/user/signin"}> Registrarse </Link>
        </div>
      ) : (
        <div>
          <UserOrdenlist user={user} logOut={logOut} />
          <button onClick={handleLogOut}>Log out</button>
        </div>
      )}
    </User_css>
  );
};

export default User;
