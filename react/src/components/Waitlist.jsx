import React, { Component } from 'react'
import dummyCustomersData from './dummyCustomersData'
import Customer from './Customer'

export default function Waitlist () {
  const [waitlistData, setWaitlistData] = React.useState({
    isOpen: false,

  })
  const customersWaiting = dummyCustomersData.map((data)=> {
  
  return  <div className='customer-container'>
            <p className="name">{data.name}</p>
            <p className="phone">{data.phone}</p>
            <p className="size">{data.size}</p>
            <p className="of-age">{data.ofAge === true? "21" : "Minors"}</p>
            <button className="remove-customer">X</button>
          </div>
  })
  return (
    
    <div className='waitlist'>
      <h2 className='waiting-title'>Next In Line</h2>
      {customersWaiting}
    </div>
    
  )
}
