import React from 'react'
import PropTypes from 'prop-types'

// rafc para poder crear el componente que se exporte solo

export const PrimerComponente = ( {titulo, subtitulo, numero}) => {
 
    return (
        <>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>

        <h2>2 + {numero}</h2>
        
        <h2>Resultado =  {2 + numero }</h2>
        </>
        )
}

// SIMULA TYPESCRIPT
// PrimerComponente.PropTypes = {

//     titulo: PropTypes.string.isRequired,
//     subtititulo : PropTypes.string.isRequired,
//     numero : PropTypes.number.isRequired

// }


// PrimerComponente.defaultProps = {

//     // Podrian HABER PROPS DEFAULT

// }


