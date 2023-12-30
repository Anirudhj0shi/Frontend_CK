import  React, { useState } from 'react';
import DefaultNavbar from './Components/DefaultNavbar';
import AddContact from './Components/addContact';
import GetContact from './Components/GetContact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  const [id,setId]=useState('');
  return (
    <>
      <Router>
      <DefaultNavbar/>
      <Routes>
        <Route path='/' element={<AddContact id={id} setId={setId} />}></Route>
        <Route path='/getcontact' element={<GetContact id={id} setId={setId} />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
