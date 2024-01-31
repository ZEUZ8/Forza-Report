import React from 'react'
import Navbar from '../../components/Navbar'
import CashierReport from '../../components/CashierReport'

const CashierReportPage = () => {
  return (
    <div className='h-[100vh]'>
      <Navbar page="Cashier "/>
      <div className='lg:pt-10 pt-5'>
      <CashierReport/>
      </div>
    </div>
  )
}

export default CashierReportPage
