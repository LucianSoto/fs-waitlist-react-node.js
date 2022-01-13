import React from 'react'

function Customer(props) {
  return (
    <div className='customer-container'>
      <p className="name">{props.name}</p>
      <p className="phone">{props.phone}</p>
      <p className="size">{props.size}</p>
      <p className="of-age">{props.ofAge}</p>
      <button className="remove-customer">X</button>
    </div>
  )
}

export default Customer

// add icon to button!!!!!
