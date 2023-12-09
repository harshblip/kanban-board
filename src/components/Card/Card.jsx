import React from 'react'
import styled from 'styled-components'
import './Card.css'

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

const images = [
  'images/p1.jpg', 'images/p2.jpg',
  'images/p3.jpg', 'images/p4.jpg',
  'images/p5.jpg'
];

export default function Card({ data }) {
  // tickets.map((x) => {
  //   console.log(x.id);
  // })
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  return (
    <CardDad>
      <div className="row">
        <p>
          {data.title}
        </p>
        <img src = {getRandomImage()} alt = "p1" className='pfp'/>
      </div>
      {data.id}
      {data.tag}
      {data.userId}
      {data.status}
      {data.name}
    </CardDad>
  )
}