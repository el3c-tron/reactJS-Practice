import React from 'react'
import useTheme from '../contexts/Theme'

function ThemeChanger() {

    const {themeMode, darkMode, lightMode} = useTheme();
    const changeTheme = (e) => {
        const status = e.currentTarget.checked;
        if(status) darkMode();
        else lightMode();
    }

    return (
        <>
            <div className='flex-row flex justify-center p-4 mt-6 w-[26rem] max-w-[30rem]'>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onChange={changeTheme}
                        checked={themeMode === "dark"}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="dark:text-white ml-3 text-sm font-bold text-gray-900">
                        Toggle for
                        {
                            (themeMode === 'light') ? " Dark Mode" : " Light Mode"
                        }
                    </span>
                </label>
                
                
                {/* <div className='flex p-2 border-2 border-blue-600'>
                    <label className=''> 
                        <span>
                            Toggle for
                            {
                                (themeMode === "light") ? " Dark Mode" : " Light Mode"
                            }
                        </span>
                    </label>
                </div>
                <div className='flex border-2 border-green-600'>
                    <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        // onChange={onChangeBtn}
                        // checked={themeMode=== "dark"}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
                </div> */}
            </div>

        </>
    )
}

export default ThemeChanger