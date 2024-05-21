import { useEffect, useState } from "react";
import BackgroundColor from "./components/BackgroundColor.jsx";
import CurrencyConverter from "./components/CurrencyConverter.jsx";
import RandomPasswordGenerator from "./components/RandomPasswordGenerator.jsx";
import ThemeChanger from "./components/ThemeChanger.jsx";
import TodoManager from "./components/TodoManager.jsx";

import { ThemeProvider } from "./contexts/Theme.js";


function App() {

  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  }

  const darkMode = () => {
    setThemeMode("dark");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])


  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
      
      <div className="dark:bg-[#121212] dark:text-white flex justify-center items-center w-auto h-auto p-2 flex-col ">
        
        <BackgroundColor/>
        <RandomPasswordGenerator />
        <CurrencyConverter />
        <ThemeChanger />
        <TodoManager />

      </div>               
      
    </ThemeProvider>
  )
}

export default App
