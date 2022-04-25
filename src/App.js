import Header from "./components/Header"
import Footer from "./components/Footer"
import ItemListContainer   from "./components/ItemListContainer"

const App =() => {
    return (<>
                <Header/>
                <ItemListContainer greeting="Esperando informacion"/>
                <Footer/>
            </>
    )
  }
  

export default App