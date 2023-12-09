import React from 'react'
import Card from '../Card/Card'

const statusIcons = {
  '0': 'unknown_med',
  '4': 'report',
  "3": 'signal_cellular_alt',
  "2": 'signal_cellular_alt',
  "1": 'signal_cellular_alt'
}

const moreIcons = {
  'add': 'add',
  'more': 'more_horiz'
}

export default function PCards({ tickets, priority }) {
  return (
    <div>
      <div className='srow'>

        <div className='m'>
          <span className={`material-symbols-outlined ${statusIcons[priority]}-icon`}>
            {statusIcons[priority]}
          </span>
          <span className='ss'>
            {(() => {
              switch (priority) {
                case 0:
                  return 'No priority';
                case 1:
                  return 'Low';
                case 2:
                  return 'Medium';
                case 3:
                  return 'High';
                case 4:
                  return 'Urgent';
                default:
                  return '';
              }
            })()}
          </span>
        </div>
        <div>
          <span className={`material-symbols-outlined ${moreIcons["add"]}-icon`}>
            add
          </span>
          <span className='material-symbols-outlined'>
            more_horiz
          </span>
        </div>
      </div>
      {tickets.filter(ticket => ticket.priority === priority).map((index, x) => {
        return <Card data={index} key={x} />
      })}
    </div>
  )
}