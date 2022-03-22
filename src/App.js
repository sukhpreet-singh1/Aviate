import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import CurrConvert from './Pages/CurrConvert'
import Header from './Components/Header';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh',
  },
});


function App() {
  const classes=useStyles();
  document.title="Aviate"
  return (
    //Router for navigating in between pages.
    <BrowserRouter>
     <div className={classes.App}>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/convert" element={<CurrConvert/>}/>
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
