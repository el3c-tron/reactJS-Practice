import React from 'react'

function InputField(

    {
        onAmountChange,
        onCurrencyChange,
        amount,
        currency,
        currencyOptions = [],
        isdisabled = false
    }

) {


    return (
        <>

            <div className='flex w-full h-auto mt-5 mb-3'>
                <input className='dark:bg-gray-700 w-[500px] h-[50px] rounded-md p-2 outline-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_10px_5px_rgba(255,255,255,0.1)] font-normal text-lg' 
                    type='number' 
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled = {isdisabled}
                />
                
                <div className='w-[130px] ml-[10px] h-[50px] rounded-md p-3 shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_10px_5px_rgba(255,255,255,0.1)] text-lg'>

                    <select className='dark:bg-[#121212] w-full h-full outline-none cursor-pointer'
                        onChange={ (e) => onCurrencyChange && onCurrencyChange(e.target.value) }
                        value={currency} 
                    >
                        {
                            currencyOptions.map( (currentCurrency) => (
                                <option key={currentCurrency} value={currentCurrency}>
                                    {currentCurrency}
                                </option>
                             ) )
                        }

                    </select>

                </div>

            </div>

        </>
    )
}

export default InputField