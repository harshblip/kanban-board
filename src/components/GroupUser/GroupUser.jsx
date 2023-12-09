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

export default function GroupUser({ sorting, users }) {
  console.log('groupUsers', sorting)
  return (
    <Box>
      <UCards users={users} user="Anoop sharma" key={users.id}/>
      <UCards users={users} user="Yogesh" key={users.id}/>
      <UCards users={users} user="Shankar Kumar" key={users.id}/>
      <UCards users={users} user="Ramesh" key={users.id}/>
      <UCards users={users} user="Suresh" key={users.id}/>
    </Box>
  )
}