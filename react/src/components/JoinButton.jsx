import React from 'react'
import useModal from './useModal'


export function JoinButton (props) {
  // const [modalIsOpen, setIsModalOpen] = React.useState(false)
  const { isShowing, toggle } = useModal()

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
    <button className='button-default' style={buttonStyles} onClick={props.toggle}>JOIN</button>
  )
}

export default JoinButton
