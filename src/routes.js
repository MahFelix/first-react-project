import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'
import Mail from './pages/Users'

function Routes(){

    return(
        <Router>

          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/usuarios' component={Mail}/>
          </Switch>

        </Router>
    )

}

export default Routes