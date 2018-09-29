// importing components to use in this file
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar, NavItem, Nav } from 'react-bootstrap'

import MyProfileContainer from './containers/MyProfileContainer'
import AllProfilesContainer from './containers/AllProfilesContainer'

class App extends Component {
  constructor(props) {
    super(props)

    // set title of the webpage when component is created
    document.title = 'CavHack Game Central'
  }

  render() {
    return (
      <div>
        {/* ! ADD NAVBAR HERE */}
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              CavHack Game Central
          </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="/">
              Home
          </NavItem>
            <NavItem href="/profiles">
              All Games
          </NavItem>
          </Nav>
        </Navbar>
        {/* router to navigate between pages, each page is a container */}
        <Switch>
          <Route exact
            path="/"
            render={() => (
              <MyProfileContainer history={this.props.history} />
            )}
          />
          <Route path="/profiles"
            render={() => (
              <AllProfilesContainer history={this.props.history} />
            )}
          />
        </Switch>

      </div>
    );
  }
}

export default App;
