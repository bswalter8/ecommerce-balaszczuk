import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemListContainer   from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App =() => {
    return (<>
                <Header/>
                <ItemListContainer greeting="Esperando informacion"/>
                <ItemDetailContainer/>
                <Footer/>
            </>
    )
  }
  

export default App