import {TextField, withStyles} from "@material-ui/core";
import React, {useCallback, useRef, useState} from "react";
import Card from "@material-ui/core/Card";
import Button from "./components/Button";
import {useApiContext} from "./ApiContext";

const loginStates = {
  logged: "LOGGED",
  rejected: "REJECTED",
  notLogged: "NOT_LOGGED"
};

const style = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#eaeaea'
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 40,
    height: 280,
    width: 400
  },
  rejected: {
    color: "red"
  }
};
const Login = withStyles(style)(({children, classes}) => {

  const [state, setState] = useState(loginStates.notLogged);
  const endpoint = useApiContext();

  const fieldValues = useRef({
    user: "",
    password: ""
  });

  const login = useCallback(() => {
    fetch(`http://${endpoint}:8080/login`, {
      method: "POST",
      body: JSON.stringify(fieldValues.current),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
        .then(res => {
          if(res.status === 200) {
            setState(loginStates.logged)
          } else {
            setState(loginStates.rejected);
          }
        })
  }, []);

  const onChangeField = useCallback((obj, param) => e => {
    obj[param] = e.target.value;
  }, []);

  return state !== loginStates.logged
      ?  (
          <div className={classes.root}>
            <Card className={classes.card}>
              <TextField label={"User"} onChange={onChangeField(fieldValues.current, "user")} />
              <TextField label={"Password"} type={"password"} onChange={onChangeField(fieldValues.current, "password")} />
              <Button onClick={login} text={"login"}/>

              {state === loginStates.rejected && <p className={classes.rejected}>Invalid Login</p>}
            </Card>
          </div>
      )
      : <React.Fragment>{children}</React.Fragment>
});

export default Login;