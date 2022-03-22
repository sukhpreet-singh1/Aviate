import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Button } from '@material-ui/core';
const useStyles = makeStyles({
    App :{
        alignItems:'end',
        paddingLeft:'400px',
        paddingTop:'100px',
    },
    heading:{
        fontFamily:'cursive',
        fontSize:'60px',
        paddingBottom:'100px',
      },
    convertbutton:{
        marginLeft:'170px',
        marginBottom:'30px',
    },
    input:{
        marginLeft:'90px',
        marginBottom:'30px',
        padding:'8px',
    },
    output:{
        fontFamily:'cursive',
        fontSize:'30px',
        paddingLeft:'30px',
    },
    select:{
        padding:'4px',
    }
     
  });

const Convert=(props) => {
    const classes=useStyles();
    const {currency}=props
    const [value,setValue]=useState();
    const [currencychange,setCurrencyChange]=useState();
    const [output,setOutput]=useState(0);
    const solve =()=>{
        fetch(`https://blockchain.info/tobtc?currency=${currencychange}&value=${value}`)
        .then(res=>res.json())
        .then(data=>{
            setOutput(data);
        })
    }
    return (
        <div className={classes.App}>
            <h1 className={classes.heading}>Currency Converter</h1>
            <input placeholder='Enter Value' className={classes.input} type="number" value={value} onChange={(e) => {setValue(e.target.value)}}/>
            <select defaultValue={currency[0]} className={classes.select} value={currencychange} onChange={(e)=>{setCurrencyChange(e.target.value)}} >
                {currency.map(option=>(
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <br/>
            <Button className={classes.convertbutton} variant="contained" onClick={solve}>convert</Button>
                    
            <h1 className={classes.output}>Bitcoin value : {output} {currencychange}</h1>
        </div>
    )
}

export default Convert