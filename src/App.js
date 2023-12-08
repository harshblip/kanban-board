import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GroupPriority from './components/GroupPriority/GroupPriority';
import GroupStatus from './components/GroupStatus/GroupStatus';
import GroupUser from './components/GroupUser/GroupUser';
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
    <div className='font-nunito'>
      <select value={grouping} onChange={e => {
        setGrouping(e.target.value)
        localStorage.setItem('grouping', e.target.value);
      }
      }>
        <option value="">Select Grouping</option>
        <option value="user">Group by User</option>
        <option value="priority">Group by Priority</option>
        <option value="status">Group by Status</option>
      </select>
      <select value={sorting} onChange={e => {
        setSorting(e.target.value)
        localStorage.setItem('sorting', e.target.value);
      }
      }>
        <option value="">Select Sorting</option>
        <option value="priority">Sort by Priority</option>
        <option value="title">Sort by Title</option>
      </select>
      {grouping === 'user' && <GroupUser sorting={sorting} tickets={tickets} />}
      {grouping === 'priority' && <GroupPriority sorting={sorting} tickets={tickets} />}
      {grouping === 'status' && <GroupStatus sorting={sorting} tickets={tickets} />}
      {!grouping && !sorting && <Home />}
    </div>
  )
}