import React, { useCallback, useEffect, useState } from 'react'

function RandomPasswordGenerator() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed ] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed ] = useState(false);
  const [password, setPasword] = useState("");
  const [copyState, setCopyState] = useState("copy")

  const generateRandomPassword = useCallback(() => {

    if(copyState === 'copied') setCopyState('copy');

    let randomStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) randomStr += "0123456789";
    if(specialCharAllowed) randomStr += "~!@#$%^&*()_+=?";

    let randomPassword = "";
    for(let i=0;i<length;i++) {

      let index = (Math.floor(Math.random() * randomStr.length));
      console.log(index);
      randomPassword += randomStr[index];

    }

    setPasword(randomPassword);

  }, [length,numberAllowed,specialCharAllowed]);

  const handleCopyButton = () => {
    
    if(copyState === 'copy') setCopyState('copied');
    else setCopyState('copy')

    window.navigator.clipboard.writeText(password);
  }


  useEffect(() => {
    generateRandomPassword();
  }, [length, numberAllowed, specialCharAllowed])


  return (
    <div className=' h-auto w-full max-w-[40rem] flex flex-col justify-center items-center p-4 mt-6 rounded-lg shadow-[0px_0px_15px_5px_rgba(0,0,0,0.2)]'>

        <p className='font-semibold text-lg'>Random Password Generator</p>
          
        <div className='flex flex-row p-2 mt-4'>
            <input value={password} readOnly className='w-[300px] rounded-md p-2 outline-none shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)]' type='text' placeholder='Password'/>
            <button onClick={handleCopyButton} className='w-[100px] rounded-md text-white pl-2 pr-2 font-semibold bg-blue-600 hover:bg-blue-500 transition-all duration-400 shadow-[0px_0px_10px_5px_rgba(0,0,0,0.1)]'>{copyState}</button>
        </div>

        <div className='flex flex-row pl-2 mt-3'>
          
          <div className='flex items-center'>
            <input type='range' min={6} max={20} className='cursor-pointer' value={length} onChange={(e)=>setLength(e.target.value)}/>
            <label className='ml-2 font-semibold'> {length} </label>
          </div>

          <div className='flex items-center'>
            <input type='checkbox' className='ml-7' checked={numberAllowed} onChange={() => {setNumberAllowed((previousState) => !previousState)}}/>
            <label className='ml-2 font-semibold'>Numbers</label>
          </div>

          <div className='flex items-center'>
            <input type='checkbox' className='ml-5' checked={specialCharAllowed} onChange={() => {setSpecialCharAllowed((previousState) => !previousState)}} />
            <label className='ml-2 font-semibold'>Sp. Characters</label>
          </div>

        </div>

    </div>
  )
}

export default RandomPasswordGenerator