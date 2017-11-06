import React from 'react';
import {Link, Route} from 'react-router-dom'
import Home from '../home'
import Search from '../search'
import './app.css'

const App = () => (
  <div id="app">
    {/*<header>*/}
      {/*<Link to="/">Home</Link>*/}
      {/*<Link to="/search">Search</Link>*/}
    {/*</header>*/}

    <main>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={Search}/>
    </main>
  </div>
)

export default App
