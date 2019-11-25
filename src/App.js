import React, {Component} from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDatail from './CarDatail/CarDatail'

class App extends Component {

  state = {
    isLoggedIn: false
  }

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
                  pathname: '/cars'
                }}
              >Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>
          <div style={{textAlign: 'center'}}>      
            <h3>Is logget in {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h3>      
            <button onClick={()=> this.setState({isLoggedIn: true})}>Login</button>
          </div>
        <hr />

        <Switch>
          <Route path="/" exact render = {() => <h1>Home Page</h1>} />
          
          {this.state.isLoggedIn ? <Route path="/about" component = {About} /> : null}
          
          <Route path="/cars/:name" component={CarDatail} />
          <Route path="/cars" component = {Cars} />
          <Redirect to = {'/'}/>
          {/* <Route 
            render={()=><h1 style={{
              color: 'red',
              textAlign: 'center'
            }}>404 not found</h1>}
          />               */}
        </Switch>  
      </div>
    );
  }
}

export default App
