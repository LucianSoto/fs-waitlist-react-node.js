import React, { Component } from 'react'
import dummyCustomersData from './dummyCustomersData'
import Customer from './Customer'
import './waitlistStyles.css'

export default function Waitlist () {

  const [waitlistData, setWaitlistData] = React.useState({
  })
  const customersWaiting = dummyCustomersData.map((data)=> {
  
  return  <div className='customer-container-grid' key={data.id}>
            <p className="name">{data.name}</p>
            <p className="phone">{data.phone}</p>
            <p className="size">{data.size}</p>
            <p className="of-age">{data.ofAge === true? "Yes" : "No"}</p>
          </div>
  })
  return (
    
    <div className='waitlist'>
      {customersWaiting}
    </div>
    
  )
}
