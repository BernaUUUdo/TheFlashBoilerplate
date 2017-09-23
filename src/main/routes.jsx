import React from 'react'
import { HashRouter as Router,Route, Redirect} from 'react-router'

import Welcome from '../apps/welcome/Welcome'

import About from '../apps/about/About'

export default props => (
    <Router>
        <Route path='/about' component={About} />
        <Route path='/' component={Welcome} />
        <Redirect from='*' to='/' />
    </Router>
)