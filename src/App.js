import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GroupPriority from './components/GroupPriority/GroupPriority';
import GroupStatus from './components/GroupStatus/GroupStatus';
import GroupUser from './components/GroupUser/GroupUser';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';

export default function App() {
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping'));
  const [sorting, setSorting] = useState(localStorage.getItem('sorting'));
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        let tickets = response.data.tickets;

        if (grouping === 'user') {
          tickets.sort((a, b) => a.userId.localeCompare(b.userId));
        }
        if (sorting === 'priority') {
          tickets.sort((a, b) => a.priority - b.priority);
        }
        if (sorting === 'title') {
          tickets.sort((a, b) => a.title.localeCompare(b.title));
        }

        setTickets(tickets);
      });
  }, [grouping, sorting]);

  return (
    <div>
      <Navbar grouping={grouping} setGrouping={setGrouping} sorting={sorting} setSorting={setSorting} />
      <div className='container'>
        {grouping === 'user' && <GroupUser sorting={sorting} tickets={tickets} />}
        {grouping === 'priority' && <GroupPriority sorting={sorting} tickets={tickets} />}
        {grouping === 'status' && <GroupStatus sorting={sorting} tickets={tickets} />}
        {!grouping && !sorting && <Home />}
      </div>
    </div>
  )
}