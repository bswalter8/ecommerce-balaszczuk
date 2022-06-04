import React from "react";
import { useContext } from "react";
import { contextoUser } from "./UserContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div_css = styled.div`
  display: inline-block;
  height: max-content;
  width: max-content;
`;

const Users_css = styled.button`
  background: url("https://api.iconify.design/bx/home-smile.svg") no-repeat
    center center / contain;
  background-size: contain;
  cursor: pointer;
  display: inline-block;
  height: 4.5rem;
  width: 5rem;
`;

const UsersWidget = () => {
  const { user } = useContext(contextoUser);
  return (
    <Div_css>
      <p>{user.name}</p>

      <Link to={"/user"}>
        <Users_css />
      </Link>
    </Div_css>
  );
};

export default UsersWidget;
