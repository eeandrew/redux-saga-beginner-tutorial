import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import Counter from './Counter'

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT_ASYNC')}
      onDecrement={() => action('DECREMENT')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
