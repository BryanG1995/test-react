import React, { useState } from "react";

const PrimerApp = ({nombre}) => {

    const [primera, setPrimera] = useState(0)

   // https://es.reactjs.org/docs/hooks-overview.html
    //${hola}
    const incrementoNumero = (e) =>{
        setPrimera(primera + 1);
        console.log(primera);
        
    }
    

    return ( 
        <>
        <h1>{nombre}</h1>
        <p>{primera}</p>
        <button onClick={(event) => incrementoNumero(event)}>Hola 1</button>
        </>
        )
    ;

};

export default PrimerApp;