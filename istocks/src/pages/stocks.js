import React from 'react';
import data from '../data.json'
import {Link} from 'react-router-dom';

const Stocks = (props) => {
    return(
        <div className = 'stocks'>
            {data.map((stocks)=>{
                const {name, lastPrice, symbol, change} = stocks;
                const stockChange = Math.round(change * 1000)/1000;
                return (
                    <Link to = {`/stocks/${symbol}`}>
                        <h2>{name} ({symbol}) {lastPrice} {stockChange}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default Stocks