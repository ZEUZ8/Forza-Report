import React from 'react'
import Navbar from '../../components/Navbar'
import Counter from '../../components/Counter'

const CouterPage = () => {
  return (
    <div className='max-w-[100vw] h-[100vh] flex flex-col'>
      <Navbar page="Couter Report"/>
      <Counter/>
    </div>
  )
}

export default CouterPage
