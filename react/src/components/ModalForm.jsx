<<<<<<< Updated upstream
import React, { useReducer } from 'react'
=======
import React from 'react'
>>>>>>> Stashed changes
import Modal from 'react-modal'
import JoinButton from './JoinButton'

function ModalForm() {
  const [isOpen, setIsOpen] = React.useState(false)
<<<<<<< Updated upstream
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [size, setSize] = React.useState(0)
  const [ofAge, setOfAge] = React.useState(false)
=======
  // const [name, setName] = React.useState('')
  // const [phone, setPhone] = React.useState('')
  // const [size, setSize] = React.useState(0)
  // const [ofAge, setOfAge] = React.useState(false)

  const [formData, setFormData] = React.useState(
    {
      name: "",
      phone: "",
      size: 0,
      // ofAge: false,
    }
  )
>>>>>>> Stashed changes
  
  function openModal() {
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
  }

<<<<<<< Updated upstream
  function handleSubmit (e) {
    e.preventDefault()
    console.log(name, phone, size, ofAge)
    closeModal()
    setName('')
    setPhone('')
    setSize(0)
    setOfAge(false)
    // api call time
=======
  function handleChange(e) {
    const {name, value, type, checked} = e.target
    setFormData(prevFromData => {
      return {
        ...prevFromData,
        [name] : type === 'checkbox' ? checked : value
      }
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    console.log(formData)
    // numbers might have to be integers.

    if(formData.name.length > 0) {
      fetch('http://localhost:3000/create_customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `name=${formData.name}&phone=${formData.phone}&size=${formData.size}`
      })
      .then(response => {
        if(response.status === 200) {
          console.log('we did it!')
        } else {
          console.log('CHECK ALL FIELDS', )
        }
      })
    } 
    // closeModal()
    // setName('')
    // setPhone('')
    // setSize(0)
    // setOfAge(false)
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
=======
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
>>>>>>> Stashed changes
          />
          <br />
          <label className="phone">Phone Number</label>
          <br />
          <input 
            name='phone'
            type="text" 
            className="text-input" 
<<<<<<< Updated upstream
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
=======
            value={formData.phone}
            placeholder="Phone"
            onChange={handleChange}
>>>>>>> Stashed changes
          />
          <br />
          <label className="size">Party Size</label>
          <select 
            name="size" 
            id="size" 
            className="select-size" 
<<<<<<< Updated upstream
            value={size}
            onChange={(e) => setSize(e.target.value)}
=======
            value={formData.size}
            onChange={handleChange}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <input 
            type="checkbox" 
            name="ofAge"
            checked={ofAge}
            onChange={(e) => setOfAge(!ofAge)}
          />
          <br />
          <button type='submit' value="submit">SUBMIT</button>
=======
          {/* <input 
            type="checkbox" 
            name="ofAge"
            checked={formData.ofAge}
            onChange={handleChange}
          /> */}
          <br />
          <button>SUBMIT</button>
>>>>>>> Stashed changes
        </form>
      </Modal>
    </div>
  )
}

export default ModalForm

