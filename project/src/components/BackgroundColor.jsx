import React, { useState } from 'react'

function BackgroundColor() {

    const [color, setColor] = useState("rgb(0,0,0,0.1)")

    const generateRandomColor = () => {
        const r = Math.floor(Math.random() * 255) + 1;
        const g = Math.floor(Math.random() * 255) + 1;
        const b = Math.floor(Math.random() * 255) + 1;

        const newColor = `rgb(${r},${g},${b},0.5)`;
        setColor(newColor);
    }

    return (
        <div className="flex h-auto w-screen p-4 justify-center rounded-lg shadow-lg" style={{backgroundColor: color}}>
            
            <button onClick={generateRandomColor} className="flex h-auto w-auto p-2 rounded-lg shadow-lg font-semibold">
                Random Color Generator
            </button>
        </div>
    )
}

export default BackgroundColor