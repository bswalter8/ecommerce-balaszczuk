import styled from 'styled-components'


const Item_css = styled.div`
   display : flex;
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
   & img{
    width: 200px;
    height: 300px;
  }

  :hover{
    transform: translate(0, -.1rem);
  }

`

const Item =({id, nombre, precio, imagen}) => {

    return (
              <Item_css>      
                <img src={require(`./../img/${imagen}`)}/>
                {console.log(imagen)}
                <p>{nombre}</p>
                <p>Valor: ${precio}</p>            
              </Item_css>             
    )
  }
  

export default Item