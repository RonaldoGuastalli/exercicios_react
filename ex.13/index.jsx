
import React from 'react'
import ReactDOM from 'react-dom'
import Family from './Family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Silva'>
        {/* <Member name='Guilherme' lastName='Silva' /> */}
        <Member name='Guilherme'/>
        <Member name='Pedro'/>
        <Member name='Marcelo'/>
    </Family>

    , document.getElementById('app'))