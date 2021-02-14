import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, logIn, logOut} from "./actions";

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Hello, Redux!</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>Logged in: {isLogged}</p>
        {isLogged ?
            <button onClick={() => dispatch(logIn())}>Log out</button>
            :
            <button onClick={() => dispatch(logOut())}>Log in</button>
        }
        {isLogged ? <h3>Information only for logged in users.</h3> : ""}
    </div>
  );
}

export default App;
