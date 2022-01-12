import React from 'react'
import ReactDOM from 'react-dom'
import modalFormStyles from './modalFormStyles.css'

const ModalForm = ({ isShowing, hide }) => isShowing? ReactDOM.createPortal(
  <>
  <div className="modal-overlay">
  <div className="modal-container" aria-modal aria-hidden tabIndex={-1} role="dialog">
    <div className="form-modal">
      {/* MIGHT HAVE TO INSTALL REACT-ARIA */}
      <button type="button" className='modal-close-button' data-dismiss="modal" aria-label="Close" onClick={hide} aria-hidden="true">&times;</button>
      <input type="text" placeholder='First Name' />
    </div>
  </div>
  </div>
  </>, document.body
) : null

export default ModalForm
