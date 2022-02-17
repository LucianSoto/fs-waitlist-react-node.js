import React, { Component } from 'react'
import './waitlistStyles.css'

export default function Waitlist ({waitlistData}) {
  //MAKE CUSTOMER COMPONENT
  return (
    <div className='waitlist'>
      {
        waitlistData.map(customer => 
          <div className='customer-container-grid' key={customer.id}>
            <p className="name">{customer.name}</p>
            <p className="phone">{customer.phone}</p>
            <p className="size">{customer.size}</p>
            <p className="of-age">{customer.of_age === true? "Yes" : "No"}</p>
          </div>
        )
      }
    </div>
  )
}
