import React from "react";
import styled from "styled-components";

const List_css = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: 20vh;
  justify-content: space-around;
  align-items: center;
  margin: 2rem;
  background-color: #e9ebea;
  border-radius: 2px;
  box-shadow: 1px 1px #e7cfcf;
  font-size: 1.1rem;
  padding: 0.8rem;
`;

const OrdenList = ({ list }) => {
  return (
    <List_css>
      <p>Fecha de pedido:<br/> {list.date.substring(0, 9)}</p>
      <p>Valor de la compra:<br/> {list.Total}</p>
      <p>Direccion de envio:<br/> {list.deliveryAdress}</p>
 
      {list.items.map((libro, i) => {
        return (
          <li key={i}>
            <p>{libro.nombre}</p><br/>
            <p>Cantidad pedida:{libro.cantidad}</p>
          </li>
        );
      })}
    </List_css>
  );
};

export default OrdenList;
