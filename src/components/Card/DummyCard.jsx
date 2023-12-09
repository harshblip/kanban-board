import React from 'react'
import styled from 'styled-components'

const CardDad = styled.div`
width: 16rem;
height: 3rem;
margin-top: 2rem;
border-radius: 6px;
padding: 2rem;
background: #f4f5f8;
border: 1px solid #e9e9e9;
`

export default function DummyCard() {
  return (
    <CardDad>
        <span>
        </span>
    </CardDad>
  )
}