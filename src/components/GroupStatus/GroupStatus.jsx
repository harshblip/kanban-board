import React from 'react'
import styled from 'styled-components'
import SCards from '../Column/SCards'

const Box = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 10px;
overflow: auto;
height: 100vh;
margin-left: 2rem;
margin-right: 2rem;
font-family: 'Nunito Sans', sans-serif;
`

export default function GroupStatus({ sorting, tickets }) {
  console.log('groupStatus', sorting)
  return (
    <Box>
      <SCards tickets={tickets} status="Backlog" key={tickets.id}/>
      <SCards tickets={tickets} status="Todo" key={tickets.id}/>
      <SCards tickets={tickets} status="In progress" key={tickets.id}/>
      <SCards tickets={tickets} status="Done" key={tickets.id}/>
      <SCards tickets={tickets} status="Cancelled" key={tickets.id}/>
    </Box>
  )
}