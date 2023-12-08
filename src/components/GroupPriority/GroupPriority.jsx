import React from 'react'
import Card from '../Card/Card'

export default function GroupPriority({ sorting, ticket }) {
  return (
    <div>
      groupPriority{sorting}
      {ticket && ticket.map((index, x) => {
       return <Card />
     })}
    </div>
  )
}