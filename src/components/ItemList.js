import Item from "./Item";
import styled from "styled-components";

const List_css = styled.section`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style: none;
`;

const ItemList = ({ items, onAdd }) => {
  return (
    <List_css>
      {items.map((libro, i) => {
        return (
          <li key={libro.id}>
            <Item libro={libro} />
          </li>
        );
      })}
    </List_css>
  );
};

export default ItemList;
