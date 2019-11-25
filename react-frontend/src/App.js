import React, {useCallback, useEffect} from 'react';
import {withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Button from "./components/Button";
import {useApiContext} from "./ApiContext";

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
    justifyContent: 'center',
    flexDirection: 'column',
    height: 200,
    width: 400,
    padding: 80
  }
};

const App = withStyles(style)(({classes})=> {

  const endpoint = useApiContext();

  return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <h2>Download logs</h2>
          <p>Download logs for your own purpose</p>
          <Button text={"Download"} href={`http://${endpoint}:8080/file`} />
        </Card>
      </div>
  );
});

export default App;
