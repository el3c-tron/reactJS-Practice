import { useState } from "react";
import BackgroundColor from "./components/BackgroundColor.jsx";
import RandomPasswordGenerator from "./components/RandomPasswordGenerator.jsx";


function App() {

  return (
    <>
      <div className="flex justify-center items-center w-auto h-auto p-2 flex-col">
        
        <BackgroundColor/>
        <RandomPasswordGenerator />

      </div>
      

    </>
  )
}

export default App
