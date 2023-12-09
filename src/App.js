import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GroupPriority from './components/GroupPriority/GroupPriority';
import GroupStatus from './components/GroupStatus/GroupStatus';
import GroupUser from './components/GroupUser/GroupUser';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import styled from 'styled-components';

const Layout = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  background-color: #f4f5f8;
`

export default function App() {
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping'));
  const [sorting, setSorting] = useState(localStorage.getItem('sorting'));
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        let tickets = response.data.tickets;
        let users = response.data.users;
        if (sorting === 'priority') {
          tickets.sort((a, b) => a.priority - b.priority);
        }
        if (sorting === 'title') {
          tickets.sort((a, b) => a.title.localeCompare(b.title));
        }
        setUsers(users);
        setTickets(tickets);
      });
  }, [grouping, sorting]);

  {users.map((x) => {
    console.log(x.name);
  })}

  return (
    <div className='App'>
      <Navbar grouping={grouping} setGrouping={setGrouping} sorting={sorting} setSorting={setSorting} />
      <Layout>
        {grouping === 'user' && <GroupUser sorting={sorting} tickets={tickets} />}
        {grouping === 'priority' && <GroupPriority sorting={sorting} tickets={tickets} />}
        {grouping === 'status' && <GroupStatus sorting={sorting} tickets={tickets} />}
        {!grouping && !sorting && <GroupStatus sorting={sorting} tickets={tickets}  />}
      </Layout>
    </div>
  )
}