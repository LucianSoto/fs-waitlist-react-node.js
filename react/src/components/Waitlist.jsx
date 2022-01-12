import React, { Component } from 'react'
import JoinButton from './JoinButton'
import Modal from 'react-modal'

export default function Waitlist () {
  const [waitlistData, setWaitlistData] = React.useState({
    isOpen: false,

  })

  return (
    <div className='waitlist-container'>
      <h1 className='title'>LUXIAN'S WAITLIST</h1>
      
    </div>
  )
}
