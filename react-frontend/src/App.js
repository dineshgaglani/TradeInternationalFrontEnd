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
    this.state = { userType: "buyer", searchTerm: "", partialSearchTerm: "", dummyObj: "" }
    this.setUserType = this.setUserType.bind(this)
    this.performSearch = this.performSearch.bind(this)
    this.setSearchTerm = this.setSearchTerm.bind(this)
    this.testfunction = this.testfunction.bind(this)
  }

  setUserType(userType) {
    this.setState(() => { return { userType:  userType.value } } )
    console.log("SetUserType Function called with arg " + userType.value)
  }

  performSearch(e) {
    this.setState((prevState) => {return {searchTerm: prevState.partialSearchTerm } })
    e.preventDefault()
  }

  setSearchTerm(e) {
    this.setState( { partialSearchTerm: e.target.value  } )
  }

  testfunction() {
    console.log("changed!")
    this.setState( {dummyObj : "changed!"} )
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
            <form onSubmit={this.performSearch}>
              <input type="text" onChange={this.setSearchTerm}/>
              <input type="submit" value="search" />
            </form>
            { this.state.searchTerm !== "" ? <SearchRes userType={this.state.userType} searchTerm={this.state.searchTerm} formClickHandler={this.testfunction}/> : null }
            { this.state.userType === "buyer" ? <ForBuyer userType={this.state.userType}/> : <ForSeller userType={this.state.userType}/> }
            { this.state.dummyObj !== "" ? <p>changed!</p> : null}
          </header>
        </div>
    );
  }

}

export default App;
