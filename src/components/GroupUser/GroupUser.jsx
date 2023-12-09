import React from 'react'
import styled from 'styled-components'
import UCards from '../Column/UCards'

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

export default function GroupUser({ sorting, tickets }) {
  console.log('groupUsers', sorting)
  return (
    <Box>
      <UCards tickets={tickets} user="Anoop sharma" key={tickets.id}/>
      <UCards tickets={tickets} user="Yogesh" key={tickets.id}/>
      <UCards tickets={tickets} user="Shankar Kumar" key={tickets.id}/>
      <UCards tickets={tickets} user="Ramesh" key={tickets.id}/>
      <UCards tickets={tickets} user="Suresh" key={tickets.id}/>
    </Box>
  )
}