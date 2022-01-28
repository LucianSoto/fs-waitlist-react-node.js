
import React from 'react'
import './App.css';
import Waitlist from './components/Waitlist';
import ModalForm from './components/ModalForm';
import InfoHeader from './components/InfoHeader';
import { getCustomers } from './components/getCustomers';

function App() {
  const [data, setData] = React.useState(null)
  const [waitlistData, setWaitlistData] = React.useState([])


  React.useEffect(() => {
    let mounted = true
    getCustomers()
      .then(customers => {
        if(mounted) {
          setWaitlistData(customers.data) 
        }
      })
      return () => mounted = false
  }, [])

  return (
    <div className="App">
      <div className='waitlist-container'>
        <h1 className='title'>LUXIAN'S WAITLIST</h1>
        <ModalForm/>
        <InfoHeader/>
        <Waitlist waitlistData={waitlistData}/>
      </div>
    </div>
  );
}

export default App;  
