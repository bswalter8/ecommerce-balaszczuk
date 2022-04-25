import styled from 'styled-components'

const Item_css = styled.div`
   margin: 1rem;
`

const Item =({id, nombre, precio}) => {
    return (
              <Item_css> 
                <p>{id}</p>
                <p>{nombre}</p>
                <p>{precio}</p>
              </Item_css> 
            
    )
  }
  

export default Item