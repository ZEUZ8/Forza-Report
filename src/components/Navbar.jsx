import React, { useState } from 'react'
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";


const Navbar = () => {
  const [theme,setTheme] = useState(false)

  return (
    <div className='flex justify-between pb-6 hover:cursor-pointer font-medium'>
      <div className=''>
        Home
      </div>
      <div className='flex gap-5 items-center'>
        <p className='text-sm text-[#FF1A1A]'>Log Out</p>
       <p className='text-lg' onClick={()=>setTheme(prev => !prev)}>{theme ? <FaMoon /> :  <LuSun />}</p>
      </div>
    </div>
  )
}

export default Navbar
