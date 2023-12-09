import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components'

const Divu = styled.div`
margin-right: 2rem;
display: flex;
flex-direction: column;
`

export default function SCards({ tickets, status }) {
  {
    tickets.map((index) => {
      console.log('hi', index.title)
    })
  }
  return (
    <Divu>
        {
          <div>
            <span className='material-symbols-outlined'>
              
            </span>
          </div>          
        }
      {tickets.filter(ticket => ticket.status === status).map((index, x) => {
        return <Card data={index} key={x} />
      })}
    </Divu>
  )
}