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
  let cnt = 0;
  const filteredTickets = tickets.filter(tix => tix.priority === priority);
  cnt += filteredTickets.length;
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
            <span className='cnt'>
              {cnt}
            </span>
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
      {filteredTickets.map((ind, y) => {
        return <Card
          data={ind}
          key={y} />
      })}
    </div>
  )
}