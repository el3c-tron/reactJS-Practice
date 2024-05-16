import React, { useEffect, useState } from 'react'
import InputField from './subComponents/InputField'
import useCurrency from '../hooks/useCurrency';


function CurrencyConverter() {

    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");

    const data = useCurrency(from);
    const options = Object.keys(data);

    const swap = () => {
        const tempTo = to , tempFrom = from , tempAmount = amount , tempConvertedAmount = convertedAmount;
        setFrom(tempTo)
        setTo(tempFrom)
        setAmount(convertedAmount)
        setConvertedAmount(amount)

    }

    const convert = () => {
        setConvertedAmount(amount * data[to])
    }



    return (
        <>

            <div className='flex justify-center items-center flex-col mt-10 p-2 w-auto h-auto '>
                <div className='flex rounded-lg justify-center items-center flex-col p-4 w-auto h-auto shadow-[0px_0px_15px_5px_rgba(0,0,0,0.2)]'>
                    
                    <p className='font-semibold text-lg'>Currency Converter</p>
                    
                    <div className='flex flex-col justify-center items-center w-[40rem] h-auto pt-2 pb-2 mt-2 mb-2'>
                        
                        <InputField 
                            amount = {amount}
                            currency = {from}
                            onAmountChange = { (currentAmount) => setAmount(currentAmount) }
                            onCurrencyChange = {(currentCurrency) => setFrom(currentCurrency)}
                            currencyOptions = {options}
                        />

                        <InputField 
                            isdisabled
                            amount = {convertedAmount}
                            currency = {to}
                            onCurrencyChange = { (currency) => setTo(currency) }
                            currencyOptions = {options}
                        />
                    </div>

                    <div className='flex w-full h-auto box-border'>
                        <button onClick={convert} className='shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)] bg-blue-600 text-white mt-2 p-2 w-[500px] rounded-md font-semibold hover:bg-blue-500 transition-all ease-in-out duration-300' >Convert</button>
                        <button onClick={swap} className='shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)] bg-white text-blue-600 hover:text-blue-500 box-border mt-2 ml-[10px] p-2 w-[130px] rounded-md font-semibold  transition-all ease-in-out duration-500' >Swap</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CurrencyConverter