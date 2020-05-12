import React, {useState, Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Link} from 'react-router-dom'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

import { Menu } from 'semantic-ui-react'


const req = require.context('./examples', false, /\.js$/)
const routers = req.keys().map(key => {
  const path = '/' + key.replace(/js/g, '').split(/[./]/).filter(x => x).join('/')
  return {
    path,
    component : req(key).default
  }
})

const App = () => {
  const [sel, setSel] = useState(window.location.href.split('#').pop())

  return <HashRouter>
    <div className='left'>
      <Menu size='big' inverted pointing vertical>
        {routers.map((x, i) => {
          return <Menu.Item
            name={x.path}
            active={sel === 'home'}
            onClick={() => setSel(sel => x.path)}
            to={x.path}
            as={Link}
          />
        })}
      </Menu>

    </div>
    <div className='content'>
      {routers.map((x, i) => {
        return <Route key={x.path} component={x.component} path={x.path} />
      })}
    </div>
  </HashRouter>
}

ReactDOM.render(<App />, document.getElementById("root"))
