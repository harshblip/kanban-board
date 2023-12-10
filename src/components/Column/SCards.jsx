import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components'
import DummyCard from '../Card/DummyCard'

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
    'Cancelled': 'cancel',
    'Add':'add',
    "More":'more_horiz'
  };

  const moreIcons = {
    'add': 'add',
    'more': 'more_horiz'
  }


  return (
    <div>
      <div className='srow'>

        <div className='m'>
          <span className={`material-symbols-outlined ${statusIcons[status]}-icon`}>
            {statusIcons[status]}
          </span>
          <span className='ss'>
            {status}
          </span>
        </div>
        <div className='v'>
          <span className={`material-symbols-outlined ${moreIcons["add"]}-icon`}>
            add
          </span>
          <span className={`material-symbols-outlined ${moreIcons["add"]}-icon`}>
            more_horiz
          </span>
        </div>
      </div>
      {
        tickets.filter(ticket => ticket.status === status).map((index, x) => {
          return <Card data={index} key={x} />
        })
      }
    </div>
  )
}