import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {

  let history = useHistory();

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <Route path='/login' component={() => <Login history={history} />} />
      <PrivateRoute path='/friends' history={history} component={FriendsList} />
    </div>
  );
}

export default App;
