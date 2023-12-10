import React from 'react'
import Card from '../Card/Card'
import styled from 'styled-components'

const Divu = styled.div`
margin-right: 2rem;
display: flex;
flex-direction: column;
`

export default function SCards({ tickets, status }) {
  let cnt = 0;
  const filteredTickets = tickets.filter(tix => tix.status === status);
  cnt += filteredTickets.length;
  // {
  //   tickets.map((index) => {
  //     console.log('hi', index.title)
  //   })
  // }

  const statusIcons = {
    'Backlog': 'block',
    'Todo': 'tour',
    'In progress': 'contrast',
    'Done': 'check_circle',
    'Cancelled': 'cancel',
    'Add': 'add',
    "More": 'more_horiz'
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
          <div className='q'>
            <span className='ss'>
              {status}
            </span>
          </div>
        </div>
        <div className='v'>
          <span className='fn1'>
            {cnt}
          </span>
          <span className={`material-symbols-outlined ${moreIcons["add"]}-icon`}>
            add
          </span>
          <span className={`material-symbols-outlined ${moreIcons["add"]}-icon`}>
            more_horiz
          </span>
        </div>
      </div>
      {filteredTickets.map((ind, y) => {
        return <Card data={ind} key={y} />
      })}
    </div>
  )
}