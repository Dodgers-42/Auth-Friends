import React, { useReducer } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import reducer from './reducer/index';
// import './App.css';

function App() {
  const initialState = {
    friends: []
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const setFriends = (friendsData) => {
    dispatch({type: "SET_FRIENDS", payload: friendsData});
  }

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/friends">Friends</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" friends={state.friends} setFriends={setFriends} component={Friends} />
      </Switch>
    </div>
  );
}

export default App;
