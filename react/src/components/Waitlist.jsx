import './waitlistStyles.css'
import Customer from './Customer'

export default function Waitlist ({ waitlistData, removeCustomer,editCustomer, openEditForm }) {
  return (
    <div className='waitlist'>
      { waitlistData.map(( customer ) =>(
        <Customer 
          // editCustomer={editCustomer}
          openEditFrom={openEditForm}
          key={customer.id} 
          name={customer.name} 
          phone={customer.phone} 
          size={customer.size} 
          ofAge={customer.of_age} 
          removeCustomer={removeCustomer} 
          id={customer.id} />
      ))}
    </div>
  )
}
