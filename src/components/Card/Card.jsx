import React from 'react'
import './Card.css'

export default function Card({ index }) {
  return (
    <div className = 'card'>
        {index.title}
    </div>
  )
}