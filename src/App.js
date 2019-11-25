import React, {Component} from 'react'
import { Route, NavLink } from 'react-router-dom'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink 
                to="/" 
                exact 
                activeClassName = {'some-active'}
              >Home</NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                activeStyle = {{
                  color: 'orange'
                }}
              >About</NavLink>
            </li>
            <li>
              <NavLink 
                to={{
                  pathname: '/cars',
                  search: 'k?a=1&b=2',
                  hash: 'some-hash'
                }}
              >Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>
        <Route path="/" exact render = {() => <h1>Home Page</h1>} />
        <Route path="/about" component = {About} />
        <Route path="/cars" component = {Cars} />        
      </div>
    );
  }
}

export default App
