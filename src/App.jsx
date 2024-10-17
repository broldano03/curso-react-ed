import { useEffect } from "react"

function App() {

  useEffect(()=> {
    fetch("https://api.coincap.io/v2/assets")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
      })
      .catch(()=>{
        console.error("La petición falló")
      })
  },[])

  return (
    <h1>Lista de criptomonedas</h1>
  )
}

export default App
