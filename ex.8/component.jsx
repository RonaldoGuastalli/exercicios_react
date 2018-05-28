import React from 'react'

/* Exportando mais de um Componente e usando default */
export const Primeiro = props => (
    <h1>Primeiro componente!</h1>
)

export const Segundo = props => <h1>Segundo componente!</h1>

// export {Primeiro, Segundo}