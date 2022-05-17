import React from 'react'
import './customer.css'

function Customer({ 
  name, 
  phone, 
  size, 
  ofAge, 
  id, 
  removeCustomer, 
  editCustomer,
  openEditFrom
})
{
  return (
      <div 
        className='customer-container-grid' 
        onClick={() => openEditFrom(id)}
      >
      <p className="name" >{name}</p>
      <p className="phone">{phone}</p>
      <p className="size">{size}</p>
      <p className="of-age">{ofAge? "Yes" : "No"}</p>
      <button className="remove-customer" onClick={() => removeCustomer(id)}>X</button>
    </div>
  )
}

export default Customer

// add icon to button!!!!!
