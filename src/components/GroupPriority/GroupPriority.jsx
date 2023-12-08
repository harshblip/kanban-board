import React from 'react'
import Card from '../Card/Card'

export default function GroupPriority({ sorting, tickets }) {
  return (
    <div>
      groupPriority{sorting}
      
      {tickets.map((index, x) => {
        return <Card index={index} key={x}/>
      })}
    </div>
  )
}