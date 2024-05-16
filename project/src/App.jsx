import BackgroundColor from "./components/BackgroundColor.jsx";
import CurrencyConverter from "./components/CurrencyConverter.jsx";
import RandomPasswordGenerator from "./components/RandomPasswordGenerator.jsx";


function App() {

  return (
    <>
      <div className="flex justify-center items-center w-auto h-auto p-2 flex-col ">
        
        <BackgroundColor/>
        <RandomPasswordGenerator />
        <CurrencyConverter />

      </div>
      

    </>
  )
}

export default App
