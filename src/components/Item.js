import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Item_css = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  background-color: #e9ebea;
  border-radius: 2px;
  box-shadow: 1px 1px #e7cfcf;
  font-size: 1.1rem;
  margin: 2rem;
  padding: 0.8rem;
  & img {
    width: 200px;
    height: 300px;
  }

  :hover {
    transform: translate(0, -0.1rem);
  }
`;

const Item = ({ libro, onAdd }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/libro/${libro.id}`);
  };
  return (
    <Item_css>
      <img src={require(`./../img/${libro.img}`)} />
      <p>{libro.nombre}</p>
      <p>{libro.autor}</p>
      <p>Valor: ${libro.precio}</p>
      <button onClick={handleClick}>ver mas</button>
    </Item_css>
  );
};

export default Item;
