import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import home from './pages/home';

class Routes extends React.Component {
  render(){
    return(
      <Router>
          <div className="body">
            <Route exact path="/" component={home} />

          </div>
      </Router>
    )
  }
}

export default Routes