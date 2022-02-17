
import React, { useEffect } from 'react'
import './App.css';
import Waitlist from './components/Waitlist';
import ModalForm from './components/ModalForm';
import InfoHeader from './components/InfoHeader';

function App() {
  const [waitlistData, setWaitlistData] = React.useState([])

  React.useEffect(() => {
      const getCustomers = async () => {
        const listFromServer = await fetchCustomers()
        setWaitlistData(listFromServer.data)
      }
      getCustomers()
  }, [])

  const fetchCustomers = async () => {
    const res = await fetch('http://localhost:3000/get_waitlist')
    const data = await res.json()
    return data
  }

  const removeCustomer = async (id) => {
    
  }

  const addCustomer = async ({ name, phone, size, ofAge}) => {
    const res = await fetch('http://localhost:3000/create_customer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `name=${name}&phone=${phone}&size=${size}&ofAge=${ofAge}`
      })
      const data = await res.json()
      console.log(data)
      
      const listFromServer = await fetchCustomers()
      setWaitlistData(listFromServer.data)
      // .then(response => {
      //   if(response.status === 200) {
      //     console.log('we did it!')
      //   } else {
      //     alert('CHECK ALL FIELDS', )
      //   }
  }

  return (
    <div className="App">
      <div className='waitlist-container'>
        <h1 className='title'>LUXIAN'S WAITLIST</h1>
        <ModalForm onSubmit={ addCustomer }/>
        {/* a div to help see if data went thorugh to state */}
        {/* <div className="test">{waitlistData[waitlistData.length - 1].name}</div> */}
        <InfoHeader/>
        {waitlistData.length > 0? (
          <Waitlist 
            waitlistData={waitlistData}
            removeCustomer={removeCustomer}
          />
        ) : (
          'no customers waiting'
        )
        }
      </div>
    </div>
  );
}

export default App;  
