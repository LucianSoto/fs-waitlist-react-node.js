import React from 'react'
import './customer.css'

function Customer({ name, phone, size, ofAge, removeCustomer}) {
  return (
      <div className='customer-container-grid'>
      <p className="name">{name}</p>
      <p className="phone">{phone}</p>
      <p className="size">{size}</p>
      <p className="of-age">{ofAge? "Yes" : "No"}</p>
      <button className="remove-customer" onClick={removeCustomer}>X</button>
    </div>
  )
}

export default Customer

// add icon to button!!!!!
