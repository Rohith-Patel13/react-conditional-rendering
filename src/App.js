import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  renderAuthenticateButton = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn) {
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
  }

  render() {
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {this.renderAuthenticateButton()}
      </div>
    )
  }
}

export default App