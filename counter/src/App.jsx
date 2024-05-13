import { useState } from 'react'
import './App.css'

function App() {

  let [value, setValue] = useState(0);
  
  const addValue = () => {
    setValue(value+1);
  }

  const subValue = () => {
    setValue(value-1);
  }

  return (
    <>
      <h1>Counter - React</h1>
      <h3>counterValue: {value}</h3>

      <button onClick = {addValue}> + </button>
      <br />
      <br />
      <button onClick = {subValue} > - </button>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed possimus quas illum rerum distinctio molestias esse quibusdam soluta explicabo. Officiis sequi aspernatur omnis tempore officia! Impedit consectetur quam quasi.</p>
    </>
  )
}

export default App
