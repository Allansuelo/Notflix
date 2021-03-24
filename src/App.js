import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, islogged} from './actions';
import Navbar from './components/navbar';
import Movies from './components/movies';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <h2 className="mCounter">Movies {counter}</h2>
        <div className="buttonContainer">
          <button onClick={() => dispatch(increment(1))}>+</button>
          <button onClick={() => dispatch(decrement(1))}>-</button>
        </div>
        
        { isLogged ? <div className="menuright"><button>Profile</button> <button onClick={() => dispatch(islogged())}>Log out</button> </div> : <div className="menuright"><button onClick={() => dispatch(islogged())}>Log in</button></div> }
        <Movies dataFromParent = {counter}/>
      </div>
    </div>
  );
}

export default App;
