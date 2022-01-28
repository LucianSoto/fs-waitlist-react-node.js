import React, { Component } from 'react'
// import dummyCustomersData from './dummyCustomersData'
import Customer from './Customer'
import './waitlistStyles.css'
// import { getCustomers } from './getCustomers'

// var customers

export default function Waitlist ({waitlistData}) {
  // React.useEffect(() => {
  //   let mounted = true
  //   getCustomers()
  //     .then(customers => {
  //       if(mounted) {
  //         setWaitlistData(customers.data) 
  //       }
  //     })
  //     console.log(waitlistData[1], 'data')
  //     return () => mounted = false
  // }, [])
  
  
  // const customersWaiting = customers.map((data)=> {
  // console.log(customers)
  // return  <div className='customer-container-grid' key={data.id}>
  //           <p className="name">{data.name}</p>
  //           <p className="phone">{data.phone}</p>
  //           <p className="size">{data.size}</p>
  //           <p className="of-age">{data.ofAge === true? "Yes" : "No"}</p>
  //         </div>
  // })
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
