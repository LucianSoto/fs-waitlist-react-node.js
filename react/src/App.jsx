
import React from 'react'
import './App.css';
import Waitlist from './components/Waitlist';
import ModalForm from './components/ModalForm';
import useModal from './components/useModal';
import JoinButton from './components/JoinButton';


function App() {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  const { isShowing, toggle } = useModal()
 
  return (
    <div className="App">
      <div className='waitlist-container'>
        <h1 className='title'>LUXIAN'S WAITLIST</h1>
        <JoinButton toggle={toggle}/>
        <Waitlist />
      </div>
      <ModalForm
        isShowing={isShowing}
        hide={toggle}
      />
      {/* <h1>{!data ? "Loading..." : data}</h1> */}
    </div>
  );
}

export default App;  
