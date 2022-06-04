import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

import { db } from "./../App";
import {
  collection,
  getDoc,
  doc
} from "firebase/firestore";
import { toast } from "react-toastify";

const DetailContainer_css = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 200;
  margin-top: 15vh;
  align-items: center;
  font-size: 3.5rem;
`;

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [libro_elegido, setLibro] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id == undefined) {
      toast.error('error')
    } else {
      const librosCollection = collection(db, "catalogoCompleto");
      const resultadoLibro = doc(librosCollection, id);
      const consultaLibro = getDoc(resultadoLibro);
      consultaLibro
        .then((res) => {
          const libroConID = {
            ...res.data(),
            id,
          };
          setLibro(libroConID);
          setCargando(false);
        })
        .catch((error) => {
          toast.error(error)
        });
    }
  }, [id]);


  return (
    cargando? <div><p>Cargando... </p><ToastContainer/></div> :
    <DetailContainer_css>
        
        <ItemDetail libro={libro_elegido} />
      </DetailContainer_css>
  )

};

export default ItemDetailContainer;
