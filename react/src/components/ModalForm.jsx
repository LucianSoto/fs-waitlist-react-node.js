import React from 'react'
import Modal from 'react-modal'
import JoinButton from './JoinButton'
import './modalFormStyles.css'

function ModalForm( { onSubmit } ) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [size, setSize] = React.useState('')
  const [ofAge, setOfAge] = React.useState('')
  // const [effect, setEffect] = React.useState([false])
  
  function openModal() {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }

  
  function handleSubmit (e) {
    e.preventDefault()
    if(name.length <= 0) {
      //error handleing here to make it easier before it even goes to the server/api
      alert('please enter a name')
      return
    } 

    onSubmit({ name, phone, size, ofAge }) 
    closeModal()
    setName('')
    setPhone('')
    setSize('')
    setOfAge('')
  }

  return (
    <div className="modal-container">
      <JoinButton onClick={openModal} />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <form 
          className="form" 
          action="submit" 
          onSubmit={handleSubmit}
        >
          <h2>We're Gonna Need Your Info!</h2>
          <button type="button" className='modal-close-button' data-dismiss="modal" aria-label="Close" onClick={closeModal} aria-hidden="true">&times;</button>
          <div className="text-inputs-cont">
            <label className="name">Name</label>
            <br />
            <input 
              name='name'
              type="text" 
              className="text-input" 
              placeholder="Name"
              value={name}   
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label className="phone">Phone Number</label>
            <br />
            <input 
              name='phone'
              type="text" 
              className="text-input" 
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <br />
          <div className="size-ofAge-cont">
            <label className="size">Party Size</label>
            <select 
              name="size" 
              id="size" 
              className="select-size" 
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <br />
            <label className='of-age'>21 Or Older?</label>
            <span>
            <input 
              type="checkbox" 
              name="ofAge"us
              checked={ofAge}
              onChange={(e) => setOfAge(e.currentTarget.checked)}
              className='ofAge-checkbox'
            />
            </span>
          </div>
          <br />
          <button className='submit'>SUBMIT</button>
        </form>
      </Modal>
    </div>
  )
}

export default ModalForm

