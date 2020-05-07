import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

      <Route path='/login' component={Login} />
      <Route path='/friends' component={FriendsList} />
    </div>
  );
}

export default App;
