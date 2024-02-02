import React from 'react'
import Navbar from '../../components/Navbar'
import CashierReport from '../../components/CashierReport'

const CashierReportPage = () => {
  return (
    <div className='h-[100vh]'>
      <Navbar page="Cashier "/>
      <CashierReport/>
    </div>
  )
}

export default CashierReportPage
