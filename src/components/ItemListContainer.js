import styled from 'styled-components'

const Main_css = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;

`

const Main = (props) => {
  return (
    <Main_css>
      
      <p>{props.greeting}</p>
    
    </Main_css>
  )
}

export default Main