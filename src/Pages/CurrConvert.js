import React, { useEffect, useState } from 'react'
import Convert from './Convert';

const base_url='https://blockchain.info/ticker'; 
//get all the currency list and pass to convert component
const CurrConvert=(props) => {
    const [currency,setCurrency]=useState([]);
    useEffect(()=>{
    fetch(base_url)
    .then(res=>res.json())
    .then(data=>{
      setCurrency(Object.keys(data),...Object.keys(data));
    })
    },[]);  
    return (
        <div>
            <Convert currency={currency} />
        </div>
    )
}

export default CurrConvert