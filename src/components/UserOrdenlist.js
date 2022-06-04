import React from "react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { db } from "./../App";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import styled from "styled-components";
import OrdenList from "./OrdenList";

const List_css = styled.section`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style: none;
`;


const UserOrdenlist = ({ user, logOut }) => {
  const [cargando, setCargando] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    const usersCollection = collection(db, "ordenes");
    const queryDB = query(usersCollection, where("userId", "==", user.id));

    const consultaDbQuery = getDocs(queryDB);
    consultaDbQuery
      .then((res) => {
        const ordenList = res.docs.map((doc) => {
          const obj = {
            ...doc.data(),
          };
          return obj;
        });
        setCargando(false);
        setList(ordenList);
      })
      .catch((error) => {
          toast.error(error)
      });
  }, []);

  return (
    <List_css>
      {cargando ? (
         <div><p>Cargando... </p><ToastContainer/></div>   
      ) : (
        <div>
          {list.length != 0 ? (
            <div>
              <h2>{user.name}, esta es tu lista de pedidos historica :</h2>
              {list.map((list, i) => {
                return (
                  <li key={i}>
                    <OrdenList list={list} />
                  </li>
                );
              })}
            </div>
          ) : (
            <h2>{user.name} aun no has hecho pedidos</h2>
          )}
        </div>
      )}
    </List_css>
  );
};

export default UserOrdenlist;
