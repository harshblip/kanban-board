import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'

export default function UCards({ tickets, users, user }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      {
        <div>
          <span>
            {user}
          </span>
          <span>
            {count}
          </span>
        </div>
      }
      {users.filter(userr => userr.name === user).map((index, x) => {
        return tickets.filter(tix => tix.userId === index.id).map((ind, y) => {
          return <Card data={ind} key={y} />
        })
      })}
    </div>
  )
}