import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs';
import Message1 from './components/Message1';
import Message2 from './components/Message2';
import Message3 from './components/Message3';


function App() {

  const [tabArray, setTabArray] = useState([<Message1/>, <Message2/>, <Message3/>])

  const [displayTab, setDisplayTab] = useState({
    tab1: true,
    tab2: false,
    tab3: false
  })

  const tabChangeHandler = (e, idx) => {
    e.preventDefault()
    console.log ("Index ----->", idx)
    if(idx=== 0){
      setDisplayTab({
        tab1: true,
        tab2: false,
        tab3: false
      })
    }
    if(idx=== 1){
      setDisplayTab({
        tab1: false,
        tab2: true,
        tab3: false
      })
    }
    if(idx=== 2){
      setDisplayTab({
        tab1: false,
        tab2: false,
        tab3: true
      })
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center mb-5'>Air Quality Index</h1>
      <div className='d-flex flex-row justify-content-center'>
        {
          tabArray.map((tab, i) => (
            <div key={i} className='p-2'><button onClick={(e) => tabChangeHandler(e,i)} href='#'>{`Tab ${i}`}</button></div>
          ))
        }
      </div>
      {
        displayTab.tab1 ? <Message1/> : null
      }
      {
        displayTab.tab2 ? <Message2/> : null
      }
      {
        displayTab.tab3 ? <Message3/> : null
      }

    </div>
  );
}

export default App;
