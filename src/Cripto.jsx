import './Cripto.css'

function Cripto({id, name, priceUsd, symbol, changePercent24Hr}) {
    
    return (
        <>
            <div className="criptocards" key={id}> 
                <h3 className="symbols"> {symbol} </h3> 
                <div className="information">
                <h2 className="names"> ({name}) </h2> 
                <span className="price">Precio: ${parseFloat(priceUsd).toFixed(4)}</span> </div>
                <span className={parseFloat(changePercent24Hr) > 0 ? "positivo": "negativo"}> 
                    Variación 24h: {parseFloat(changePercent24Hr).toFixed(2)}% 
                </span>
            </div>
        </>
    )
}

export default Cripto