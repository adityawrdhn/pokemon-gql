import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from 'Containers/List';

const App = prop => {
  return (
    <Router basename='/'>
      <Switch>
        <Route exact path='/' component={Index}/>
        {/* <Route exact path='/:id' component={Index}/> */}
      </Switch>
    </Router>
  )
}

export default App
