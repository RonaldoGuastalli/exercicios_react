import React from 'react'

/* Exportando mais de um Componente e usando default */
const Primeiro = props => (
    <h1>Primeiro componente!</h1>
)

const Segundo = props => <h1>Segundo componente!</h1>

export {Primeiro, Segundo}