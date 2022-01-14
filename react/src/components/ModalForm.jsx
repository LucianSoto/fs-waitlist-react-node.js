import React from 'react'
import Modal from 'react-modal'
import JoinButton from './JoinButton'

function ModalForm() {
  const [isOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }

  function handleSubmit () {
    
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
            type="text" 
            className="text-input" 
            // value={state.name}
            placeholder="Name"
            // onChange={handleChange}
          />
          <br />
          <label className="phone">Phone Number</label>
          <br />
          <input 
            type="text" 
            className="text-input" 
            // value={state.phone}
            placeholder="Name"
            // onChange={handleChange}
          />
          <br />
          <label className="size">Party Size</label>
          <select 
            name="size" 
            id="size" 
            className="select-size" 
            // value={state.size}
          >
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
            type="text" 
            name="ofAge"
            // checked={state.ofAge}
            // onChage={handleChange}
          />
          <br />
          <button type='submit' value="submit">SUBMIT</button>
        </form>
      </Modal>
    </div>
  )
}

export default ModalForm

