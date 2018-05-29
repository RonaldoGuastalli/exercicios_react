import React from 'react'

/* transformar este componente puramente react em react-redux */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions'

const Counter = props => (
    <div>
        <h1>
            {props.counter.number}
        </h1>
        <input onChange={props.stepChanged} value={props.counter.step} type='number'/>
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch)


/* o resultado de "connect(mapStateToProps, mapDispatchToProps)"
retorna uma função que recebe "(Counter)" e essa função e exportada por "export default"
*/
export default connect(mapStateToProps, mapDispatchToProps)(Counter)