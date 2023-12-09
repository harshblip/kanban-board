import React from 'react'
import Card from '../Card/Card'

export default function PCards({ tickets, priority }) {
  return (
    <div>
      {tickets.filter(ticket => ticket.priority === priority).map((index, x) => {
        return <Card data={index} key={x}/>
      })}
    </div>
  )
}