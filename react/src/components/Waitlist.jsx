import React, { Component } from 'react'
import JoinButton from './JoinButton'
import Modal from 'react-modal'

export default function Waitlist () {
  const [waitlistData, setWaitlistData] = React.useState({
    isOpen: false,

  })

  return (
    <div className='waitlist'>
      <div className="customer">1</div>
      <div className="customer">2</div>
      <div className="customer">3</div>
      <div className="customer">4</div>
      <div className="customer">5</div>

    </div>
    
  )
}
