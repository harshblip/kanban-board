import React from 'react'
import styled from 'styled-components'
import p1 from '../../../public/images/p1.jpg';

const CardDad = styled.div`
max-width: 10rem;
min-width: 16rem;
height: 2rem;
margin-top: 2rem;
border-radius: 6px;
padding: 2rem;
background: #ffffff;
border: 1px solid #e9e9e9;
`

export default function Card({ data }) {
  // tickets.map((x) => {
  //   console.log(x.id);
  // })
  return (
    <CardDad>
      <div className="row">
        <p>
          {data.title}
        </p>
      <img src = {p1} alt = "p1" className='pfp'/>
      </div>
      {data.id}
      {data.tag}
      {data.userId}
      {data.status}
      {data.name}
    </CardDad>
  )
}