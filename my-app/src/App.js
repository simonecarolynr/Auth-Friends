import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { FriendsList } from "./components/FriendsList";
import './App.css';

function App() {

  return (
    <Router>
    <div className="App">



      <Route path='/login' render={(props) => <Login {...props} />} />
      <PrivateRoute path='/friends' component={FriendsList} />
    </div>
    </Router>
  );
}

export default App;
