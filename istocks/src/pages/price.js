import React from 'react'
import data from '../data.json'

const Price = (props) => {
    const symbol = props.match.params.symbol
    const apiKey = 'b74bf994daf5be71272c844e4586d236';
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`
    const [stocks, setStocks] = React.useState('null')
    console.log(url)
    const getStock = async () => {
        const response = await fetch(url);
        const apiData = await response.json();
        setStocks(apiData);
        console.log(apiData);
    }

    React.useEffect(()=>{
        getStock()

        //commenting out since I'm now relying on the API
        // let tempStock = null;
        // data.forEach((stock)=> {
        //     if(stock.symbol === symbol){
        //         tempStock = stock;
        //     }
        // })
        // setStocks(tempStock)
    }, []);
    const loaded = () => {
        return (
            <div className = "price">

                <img src = {stocks[0].image} />
                <h1>
                    Name: {stocks[0].companyName}
                </h1>
                <h1>
                    Price: ${stocks[0].price}
                </h1>
            </div>
        )
    }
    const loading = () => {
        return <h1>...loading</h1>
    }
    return (
        <div>{stocks ? loaded() : loading()}</div>
    ) 
}

export default Price