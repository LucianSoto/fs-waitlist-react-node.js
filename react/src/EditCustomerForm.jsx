import React from 'react'
import Modal from 'react-modal'
// css

function EditCustomerForm({ editForm }) {
  const [isOpen, setIsOpen] = React.useState(editForm)
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [size, setSize] = React.useState('')
  const [ofAge, setOfAge] = React.useState('')

  // how to brin in info from clicked element?

  const closeFormModal = () => {
    setIsOpen(false)
  }

  

  const handleSubmit = () => {
    console.log('clicked')
    closeFormModal()
  }

  return (
    <>
    <Modal
      isOpen={isOpen}
      onRequestClose={closeFormModal}
      ariaHideApp={false}
      onRequestClose={closeFormModal}
      className="Modal"
      overlayClassName="Overlay"
    >
      <form 
          className="form" 
          action="submit" 
          onSubmit={handleSubmit}
        >
          <h2>We're Gonna Need Your Info!</h2>
          <button type="button" className='modal-close-button' data-dismiss="modal" aria-label="Close" onClick={closeFormModal} aria-hidden="true">&times;</button>
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
    </>
  )
}

export default EditCustomerForm