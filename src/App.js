import React from 'react'
import Form from './Form';
import DataCenter from './DataCenter';
import Users from './Users'
import Nav from './Nav';
import Posts from './components/Posts';
import FormPosts from './components/FormPosts';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <DataCenter>
        <Router>
          <Nav />
        <Switch>
            <Route exact path='/users' component={Users} />
            <Route exact path='/form' component={Form} />
            <Route exact path='/posts' component={Posts} />
            <Route exact path='/formposts' component={FormPosts} />
        </Switch>
        </Router>
      </DataCenter>
    </div>
  );
}

export default App;
