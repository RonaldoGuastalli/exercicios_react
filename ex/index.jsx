
import React from 'react'
import ReactDOM from 'react-dom'

/* para uso de react-redux */
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './counterReducer'
import Counter from './counter'

/* no index tem a junção do: Reducer, Componente falta actions*/

const reducers = combineReducers({
    counter: counterReducer
})

//apresentado OK na tela
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>


    , document.getElementById('app'))