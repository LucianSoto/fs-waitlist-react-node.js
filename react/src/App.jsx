
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
      <Waitlist />
      <JoinButton toggle={toggle}/>
      {/* <h1>{!data ? "Loading..." : data}</h1> */}
      <ModalForm
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
}

export default App;  
