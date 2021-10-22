import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contacts" component={Contact}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
