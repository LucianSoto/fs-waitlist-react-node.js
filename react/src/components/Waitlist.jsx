import React, { Component } from 'react'
import './waitlistStyles.css'
import Customer from './Customer'

export default function Waitlist ({ waitlistData, removeCustomer }) {
  return (
    <div className='waitlist'>
      { waitlistData.map(( customer ) =>(
        <Customer key={customer.id} name={customer.name} phone={customer.phone} size={customer.size} ofAge={customer.of_age} removeCustomer={removeCustomer} id={customer.id} />
      ))}
    </div>
  )
}
