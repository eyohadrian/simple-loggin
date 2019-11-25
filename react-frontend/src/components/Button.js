import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import React from "react";

const style =  {
  root: {
    marginTop: 40,
    width: 191
  }
};

export default withStyles(style)(({classes, text, onClick, ...props}) => (
    <Button className={classes.root} variant={"contained"} color={"primary"} onClick={onClick} {...props}>{text}</Button>
))