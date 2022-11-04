import React from 'react'
import './App.css';
import Image from './component/profile/ProfilePhoto';
import Fullname from './component/profile/FullName';
import Address from './component/profile/Address';
function App() {
  return (
    <div className="App">
      <Image/>
      <Fullname/>
       <Address />
    </div>
  );
}

export default App;
