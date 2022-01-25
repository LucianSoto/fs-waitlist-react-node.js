
import React from 'react'
import './App.css';
import Waitlist from './components/Waitlist';
import ModalForm from './components/ModalForm';
import InfoHeader from './components/InfoHeader';

function App() {
  const [data, setData] = React.useState(null)

  // React.useEffect(() => {
  //   fetch('http://localhost:3000/api')
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message))
  // }, [])
 
  return (
    <div className="App">
      <div className='waitlist-container'>
        <h1 className='title'>LUXIAN'S WAITLIST</h1>
        <ModalForm/>
        <InfoHeader/>
        <Waitlist />
      </div>
    </div>
  );
}

export default App;  
