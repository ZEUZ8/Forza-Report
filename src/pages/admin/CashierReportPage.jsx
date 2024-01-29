import React from 'react'
import Navbar from '../../components/Navbar'
import CashierReport from '../../components/CashierReport'

const CashierReportPage = () => {
  return (
    <div className='grid gap-4'>
      <Navbar page="Cashier Page"/>
      <CashierReport/>
    </div>
  )
}

export default CashierReportPage
