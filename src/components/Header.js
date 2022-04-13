import Nav from "./NavBar"
import styled from 'styled-components'

const Header_css = styled.header`
    background-color: rgb(231, 222, 222);
    position: absolute;
    overflow: hidden;
    display: flex; 
    justify-content: space-around;
    align-items: flex-end;
    margin: 0;
    height: 15%;  
    width: 100%;
    z-index: 1;
    & a{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      background-color: aliceblue;
      padding: .2rem;
      
    }
    & h1{
    font-family: 'BIZ UDPMincho', serif;
    font-size: 2em;
    margin: 1.2em;
  }
`

const Header = () =>{
    return (<Header_css>

                <Nav/>
            </Header_css>)
}

export default Header