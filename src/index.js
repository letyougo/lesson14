import React, { useReducer } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Provider from 'react-redux/es/components/Provider'
import { store } from './store'
import App from './App'
import {
  request
} from '../config'

let root = document.getElementById('root')
class Init extends React.Component {
  render () {
    return (
      <div>
        init
      </div>
    )
  }

  reRender () {
    unmountComponentAtNode(root)
    Object.assign(global, {
      name: 111
    })
    render(
      <Provider store={store}>
        <App />
      </Provider>, root
    )
  }

  componentDidMount () {
    this.reRender()
  }
}

render(<Init />, root)
