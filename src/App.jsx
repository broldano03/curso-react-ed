import { useEffect, useState } from "react"

function App() {

  const [criptos,setCriptos] = useState()

  useEffect(()=> {
    fetch("https://api.coincap.io/v2/assets")
      .then((resp) => resp.json())
      .then((data) => {
        setCriptos (data.data)
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
