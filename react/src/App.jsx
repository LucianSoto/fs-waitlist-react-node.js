
import React, { useEffect } from 'react'
import './App.css';
import Waitlist from './components/Waitlist';
import ModalForm from './components/ModalForm';
import InfoHeader from './components/InfoHeader';
import { getCustomers } from './components/getCustomers';

function App() {
  const [data, setData] = React.useState(null)
  const [waitlistData, setWaitlistData] = React.useState([])
  // const [effect, setEffect] = React.useState([false])

  async function updateList () {
    console.log('updatelist')
    let data = await fetch('http://localhost:3000/get_waitlist')
      .then((res)=> {
        res.json()
        return setWaitlistData(res.data)
      })
      .catch((err)=> {
        console.log(err)
      })
  }

  React.useEffect(() => {
    let mounted = true
     getCustomers()   // await function???????? because data is in DB after submit
      .then(customers => {
        if(mounted) {
          setWaitlistData(customers.data) 
        }
      })
      console.log('use effect')
      return () => mounted = false
  }, [])

  

  return (
    <div className="App">
      <div className='waitlist-container'>
        <h1 className='title'>LUXIAN'S WAITLIST</h1>
        <ModalForm updateList={updateList}/>
        {/* a div to help see if data went thorugh to state */}
        {/* <div className="test">{waitlistData[waitlistData.length - 1].name}</div> */}
        <InfoHeader/>
        <Waitlist waitlistData={waitlistData}/>
      </div>
    </div>
  );
}

export default App;  
