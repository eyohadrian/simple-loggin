import React, {useCallback, useEffect, useRef, useState} from 'react';
import {TextField, withStyles} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

const login = {
  logged: "LOGGED",
  rejected: "REJECTED",
  notLogged: "NOT_LOGGED"
};

const style = {
  login: {
    root: {

    }
  }
};
const Login = withStyles(style.login)(() => {

  const fieldValues = useRef({
    user: "",
    password: ""
  });

  const login = useCallback(({onLogin}) => {
    fetch("http://127.0.0.1:8080/login", {
      method: "POST",
      body: JSON.stringify(fieldValues.current),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
      .then(res => {
        if(res.status === 200) {
          onLogin(login.logged)
        } else {
          setState(login.rejected)
          onLogin(login.rejected)
        }
      })
  }, []);

  const onChangeField = useCallback((obj, param) => e => {
    obj[param] = e.target.value;
  }, []);

  return (
    <div>
      <TextField label={"User"} onChange={onChangeField(fieldValues.current, "user")} />
      <TextField label={"Password"} type={"password"} onChange={onChangeField(fieldValues.current, "password")} />
      <Button onClick={login}>login</Button>
    </div>
  )
});

function App() {
  const [state, setState] = useState(login.notLogged);
  const onLogin = useCallback(state => {
    setState(state)
  }, []);

  return (
    <div className="App">
      {state === login.logged ? <div>LOGGED</div> : <Login onLogin={onLogin}/>}
    </div>
  );
}

export default App;
