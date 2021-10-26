import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import Favorite from './components/Favorite'

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contacts" component={Contact}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/favorite" component={Favorite}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
