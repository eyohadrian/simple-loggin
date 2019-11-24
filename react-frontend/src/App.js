import React, {useCallback, useRef, useState} from 'react';
import {TextField} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

function App() {
  const textValue = useRef("");
  const urlValue = useRef();
  const [responses, setResponses] = useState([]);
  const [url, setUrl] = useState("http://127.0.0.1:8080/");
  const send = useCallback(() => {
    fetch(`${url}?value=${textValue.current}`, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Credentials': 'true'
      }
    }).then(res => {
      if(res.ok) {
        return res.text();
      }
    }).then(res => setResponses(responses => [...responses, res]))
      .catch(err => {
      console.log(err)
    });
  }, [url]);

  const saveUrl = useCallback(() => setUrl(urlValue.current), []);
  return (
    <div className="App">
      <div>
        <h1>URL</h1>
        <TextField defaultValue={url} onChange={e => urlValue.current = e.target.value}/>
        <Button onClick={saveUrl}>Send</Button>
      </div>
      <div>
        <h1>Send</h1>
        <TextField onChange={e => textValue.current = e.target.value}/>
        <Button onClick={send}>Send</Button>
      </div>
      <List>
        {responses.map((value, index) => <ListItem key={`value-item-n-${index}`}>{value}</ListItem>)}
      </List>
    </div>
  );
}

export default App;
