import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    let authenticateButton
    if (isLoggedIn) {
      authenticateButton = <button type="button">Logout</button>
    } else {
      authenticateButton = <button type="button">Login</button>
    }
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {authenticateButton}
      </div>
    )
  }
}

export default App
