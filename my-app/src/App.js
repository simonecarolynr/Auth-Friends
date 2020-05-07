import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { FriendsList } from "./components/FriendsList";
import './App.css';

function App() {

  let history = useHistory();

  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
      <Route path='/login' component={() => <Login history={history} />} />
      <PrivateRoute component={() => <FriendsList history={history} />}/>
    </div>
  );
}

export default App;
