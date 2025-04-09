import SearchBar from " ./componentes/SearchBar"
import imageList from "./componentes/imageList"
import SearchImages from "./api"

function App() { 
  searchImages ('cars')
  return ( 
    <>
    <h1>pictures App</h1>
    <SearchBar />
    <imageList />

    </>
  )

 }
export default App
