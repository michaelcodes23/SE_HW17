
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/about';
import Stocks from './pages/stocks';
import Price from './pages/price';
import Main from './pages/main';

function App() {
  return (
    // <h1>Test</h1>
    <div className="App">
      <h1>Git These Stocks</h1>
      <Nav />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path ='/price/:symbol'
           render={(routerProps) => <Price {...routerProps} /> } />
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
