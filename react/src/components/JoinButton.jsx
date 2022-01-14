import React from 'react'

export function JoinButton ({ onClick, isOpen}) {

  const buttonStyles = {
    width: 190,
    height: 50,
    backgroundColor: "#37d41c",
    border: 'none',
    borderRadius: 30,
    fontSize: 25,
    letterSpacing: 5,
    textAlign: "center",
    fontWeight: "bold"
  }

  return (
    <button className='button-default' style={buttonStyles} onClick={onClick}>JOIN</button>
  )
}

export default JoinButton
