import './App.css';
import { useState, useEffect } from 'react';

import { Body } from './components/Body/Body';
import { TicketDetails } from './components/TicketDetails/TicketDetails';
import { useStateValue } from './state/AppDataProvider';
import { CreateTicket } from './components/CreateTicket/CreateTicket';


function App() {
  const [{ selectedTicket, saveTicket }] = useStateValue();
  const hasSelectedTicket = selectedTicket != null;
  
  
  
  
  return (
    <main className='app'>
     
      <Body />
      {hasSelectedTicket ? <TicketDetails /> : <div></div>}
      {saveTicket.show ? <CreateTicket /> : <div></div>}
     
     
    </main>


  );
}

export default App;
