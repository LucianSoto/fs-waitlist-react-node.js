import React, { Component } from 'react'
// import dummyCustomersData from './dummyCustomersData'
import Customer from './Customer'
import './waitlistStyles.css'
// import { getCustomers } from './getCustomers'


export default function Waitlist ({waitlistData}) {

  // const [effect, setEffect] = React.useState([false])
  console.log(waitlistData, 'in waitlist function')
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
