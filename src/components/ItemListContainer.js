import styled from 'styled-components'
import ItemCount from './ItemCount'

const Main_css = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;

`


const Main = (props) => {

  const addItem = (cant) =>{
    alert(cant)   
  }

  return (
    <Main_css>
      
      <p>{props.greeting}</p>
      <ItemCount stock="4" initial="1" onAdd={addItem}/>
    </Main_css>
    
  )
}

export default Main