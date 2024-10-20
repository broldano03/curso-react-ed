import { useEffect, useState } from "react"
import "./App.css" 
import Cripto from "./Cripto"

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos,setCriptos] = useState()

  useEffect(()=> {
    fetch(`${API_URL}/assets`)
      .then((resp) => resp.json())
      .then((data) => {
        setCriptos (data.data)
      })
      .catch(()=>{
        console.error("La petición falló")
      })
  },[])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <div className="criptocards-container">
        {
          criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto 
            key={id} 
            name={name} 
            priceUsd={priceUsd} 
            symbol ={symbol} 
            changePercent24Hr={changePercent24Hr} />
          ))
        }
      </div>
    </>
  )
}

export default App
