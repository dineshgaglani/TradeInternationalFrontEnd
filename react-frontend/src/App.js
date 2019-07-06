import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import SearchRes from "./components/SearchRes.js"
import ForBuyer from "./components/ForBuyer.js"
import ForSeller from "./components/ForSeller"

class App extends React.Component {

  constructor() {
    super()
    this.state = { userType: "buyer" }
    this.setUserType = this.setUserType.bind(this)
  }

  setUserType(userType) {
    this.setState(() => { return { userType:  userType.value } } )
    console.log("Function called with arg " + userType.value)
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <p> I am a : </p><Dropdown options={["buyer", "seller"]} value={this.state.userType}
                                       onChange={ (e) => { this.setUserType(e) } } />
            <SearchRes userType={this.state.userType}/>
            { this.state.userType === "buyer" ? <ForBuyer userType={this.state.userType}/> : <ForSeller userType={this.state.userType}/> }
          </header>
        </div>
    );
  }

}

export default App;
