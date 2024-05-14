import React from 'react'

function Heading({content}) {
  return (
    <>
        <h1 className='bg-blue-400 p-2 rounded-xl text-black m-4'>{content}</h1>
    </>
  )
}

export default Heading