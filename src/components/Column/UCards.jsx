import React from 'react'
import Card from '../Card/Card'

export default function UCards({ users, user }) {
  return (
    <div>
      {users.filter(w => w.name === user).map((index, x) => {
          return <Card data={index}  key={x}/>
        })}
    </div>
  )
}