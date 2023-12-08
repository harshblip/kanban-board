import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'user');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');
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
      <select value={grouping} onChange={e => setGrouping(e.target.value)}>
        <option value="user">Group by User</option>
        <option value="priority">Group by Priority</option>
        <option value="status">Group by Status</option>
      </select>
    </div>
  )
}