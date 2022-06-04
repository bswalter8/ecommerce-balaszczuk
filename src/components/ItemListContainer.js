import styled from "styled-components";
import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { db } from "./../App";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";

const Main_css = styled.main`
  width: 100vw;
  margin-top: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
`;

const Main = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { nombrecategoria } = useParams();

  useEffect(() => {
    const librosCollection = collection(db, "catalogoCompleto");

    if (nombrecategoria == undefined) {
      setCargando(true);
      const consultaDB = getDocs(librosCollection);
      consultaDB
        .then((res) => {
          const libros = res.docs.map((doc) => {
            const libroConID = {
              ...doc.data(),
              id: doc.id,
            };
            return libroConID;
          });
          setProductos(libros);
          setCargando(false);
        })
        .catch((error) => {
          toast.error(error)
        })
        .finally(() => {});
    } else {
      setCargando(true);
      const queryDB = query(
        librosCollection,
        where("categoria", "==", nombrecategoria)
      );

      const consultaDbQuery = getDocs(queryDB);
      consultaDbQuery
        .then((res) => {
          const libros = res.docs.map((doc) => {
            const libroConID = {
              ...doc.data(),
              id: doc.id,
            };
            return libroConID;
          });
          setCargando(false);

          setProductos(libros);

        })
        .catch((error) => {
            toast.error(error)
        });
    }
  }, [nombrecategoria]);

  return cargando ? (
    <Main_css>
       <ToastContainer />
      <p>Cargando...</p>
    </Main_css>
  ) : (
    <Main_css>
      <ItemList items={productos} />
    </Main_css>
  );
};

export default Main;
