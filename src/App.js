import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemListContainer   from "./components/ItemListContainer"

const App =() => {
    return (<>
                <Header/>
                <ItemListContainer greeting="Hola, aqui estará el catalogo de libros"/>
                <Footer/>
            </>
    )
  }
  

export default App