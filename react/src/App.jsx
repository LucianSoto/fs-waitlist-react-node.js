
import React from 'react'
import './App.css';
import Waitlist from './components/Waitlist';
import ModalForm from './components/ModalForm';

function App() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch('http://localhost:3000/api')
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])
 
  return (
    <div className="App">
      <div className='waitlist-container'>
        <h1 className='title'>LUXIAN'S WAITLIST</h1>
        <ModalForm/>
        <Waitlist />
      </div>
<<<<<<< Updated upstream
=======
      {/* <h3>{ !data? "loading..." : data }</h3> */}
>>>>>>> Stashed changes
    </div>
  );
}

export default App;  
