import React from 'react'
import Card from '../Card/Card'

export default function GroupPriority({ sorting, tickets }) {
  console.log('groupPriority', sorting)
  return (
    <div className='container'>
      <div>
        No priority
        {tickets.filter(ticket => ticket.priority === 0).map((index, x) => {
          return <Card index={index} key={x} />
        })}
      </div>
      <div>
        Urgent
        {tickets.filter(ticket => ticket.priority === 4).map((index, x) => {
          return <Card index={index} key={x} />
        })}
      </div>
      <div>
        High
        {tickets.filter(ticket => ticket.priority === 3).map((index, x) => {
          return <Card index={index} key={x} />
        })}
      </div>
      <div>
        Medium
        {tickets.filter(ticket => ticket.priority === 2).map((index, x) => {
          return <Card index={index} key={x} />
        })}
      </div>
      <div>
        Low
        {tickets.filter(ticket => ticket.priority === 1).map((index, x) => {
          return <Card index={index} key={x} />
        })}
      </div>
    </div>
  )
}