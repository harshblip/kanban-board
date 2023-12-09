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

  const statusIcons = {
    'Backlog': 'block',
    'Todo': 'tour',
    'In progress': 'contrast',
    'Done': 'check_circle',
    'Cancelled': 'cancel'
  };


  return (
    <Divu>
      {
        <div className='userS'>
          <div>
            <span className={`material-symbols-outlined ${statusIcons[status]}-icon`}>
              {statusIcons[status]}
            </span>
            <span className='ss'>
              {status}
            </span>
          </div>
          <div>
            <span className='material-symbols-outlined'>
              add
            </span>
            <span className='material-symbols-outlined'>
              more_horiz
            </span>
          </div>
        </div>
      }
      {tickets.filter(ticket => ticket.status === status).map((index, x) => {
        return <Card data={index} key={x} />
      })}
    </Divu>
  )
}