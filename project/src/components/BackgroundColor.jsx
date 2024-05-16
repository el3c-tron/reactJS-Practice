import React, { useState } from 'react'

function BackgroundColor() {

    const [color, setColor] = useState("rgb(255,255,255,1)")

    const generateRandomColor = () => {
        const r = Math.floor(Math.random() * 255) + 1;
        const g = Math.floor(Math.random() * 255) + 1;
        const b = Math.floor(Math.random() * 255) + 1;

        const newColor = `rgb(${r},${g},${b},0.5)`;
        setColor(newColor);
    }

    return (
        <div className="flex h-auto w-full p-4 justify-center rounded-lg shadow-[0px_0px_15px_5px_rgba(0,0,0,0.2)]" style={{backgroundColor: color}}>
            
            <button onClick={generateRandomColor} className="flex h-auto w-auto p-2 rounded-lg shadow-[0px_0px_10px_2px_rgba(0,0,0,0.1)] font-semibold">
                Random Color Generator
            </button>
        </div>
    )
}

export default BackgroundColor