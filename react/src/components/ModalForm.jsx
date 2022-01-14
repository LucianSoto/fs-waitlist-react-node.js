import React, { useReducer } from 'react'
import Modal from 'react-modal'
import JoinButton from './JoinButton'

function ModalForm() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [size, setSize] = React.useState(0)
  const [ofAge, setOfAge] = React.useState(false)
  
  function openModal() {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }

  function handleSubmit (e) {
    e.preventDefault()
    console.log(name, phone, size, ofAge)
    closeModal()
    setName('')
    setPhone('')
    setSize(0)
    setOfAge(false)
    // api call time
  }

  return (
    <div className="modal-container">
      <JoinButton onClick={openModal} />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <button type="button" className='modal-close-button' data-dismiss="modal" aria-label="Close" onClick={closeModal} aria-hidden="true">&times;</button>
        <form 
          className="form" 
          action="submit" 
          onSubmit={handleSubmit}
        >
          <label className="name">Name</label>
          <br />
          <input 
            name='name'
            type="text" 
            className="text-input" 
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label className="phone">Phone Number</label>
          <br />
          <input 
            name='phone'
            type="text" 
            className="text-input" 
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label className="size">Party Size</label>
          <select 
            name="size" 
            id="size" 
            className="select-size" 
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value=""></option>
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
          <input 
            type="checkbox" 
            name="ofAge"
            checked={ofAge}
            onChange={(e) => setOfAge(!ofAge)}
          />
          <br />
          <button type='submit' value="submit">SUBMIT</button>
        </form>
      </Modal>
    </div>
  )
}

export default ModalForm

