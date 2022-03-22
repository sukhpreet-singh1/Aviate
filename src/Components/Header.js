import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
 appbar:{
    backgroundColor:'#000',
 },
 navlinks: {
    display: "flex",
  },
 logo: {
    flexGrow: 1,
    color: "gold",
    fontFamily: "Montserrat",
    cursor: "pointer",
    fontWeight:'bold',
    paddingLeft:'10px',
  },
  button: {
    textDecoration: "none",
    color: "black",
    backgroundColor:"gold",
    fontSize: "13px",
    marginLeft: '10px',
    "&:hover": {
      color: "white",
      backgroundColor:"gold",
      borderBottom: "2px solid white",
    },
  },
}));

function Header() {
  const classes = useStyles();
  const navigate=useNavigate();
  return (
    <AppBar className={classes.appbar} position="static">
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Aviate
        </Typography>
          <div className={classes.navlinks}>
                <Button className={classes.button} variant="contained" onClick={()=>navigate("/")} >Home</Button>
                <Button className={classes.button} variant="contained" onClick={()=>navigate("/convert")} >Converter</Button>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Header;

