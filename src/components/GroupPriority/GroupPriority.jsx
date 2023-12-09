import React from 'react'
import PCards from '../Column/PCards'
import styled from 'styled-components'

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

export default function GroupPriority({ sorting, tickets }) {
  console.log('groupPriority', sorting)
  {tickets.map((x) => {
    console.log(x.title);
  })}
  return (
    <Box>
      {/* priority, array */}
      <PCards tickets={tickets} priority={0} key={tickets.id} />
      <PCards tickets={tickets} priority={1} key={tickets.id} />
      <PCards tickets={tickets} priority={2} key={tickets.id} />
      <PCards tickets={tickets} priority={3} key={tickets.id} />
      <PCards tickets={tickets} priority={4} key={tickets.id} />
    </Box>
  )
}