import React from 'react'

const Cards = ({title,amount,percentage}) => {

  return (
    <div className='shadow shadow-special rounded-xl p-3 max-w-[100%] '>
        <p className='text-sm font-medium text-start py-3'>{title}</p>
        <p className='text-3xl font-[340] py-3'>{amount}.000<span className='text-xs'>AED</span></p>
        {percentage && <p className='text-end text-xs'>{percentage}%</p>}
    </div>
  )
}

export default Cards
