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

const colors = ['orange', 'lightgray', 'green'];

export default function Card({ data }) {
  // tickets.map((x) => {
  //   console.log(x.id);
  // })
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return (
    <CardDad>
      <div className="row">
        <div>
          <p className='id'>
            {data.id}
          </p>
        </div>
        <div>
          <img src={getRandomImage()} alt="p1" className='pfp' />
          <svg class="status-dot" width="10" height="10">
            <circle cx="5" cy="5" r="5" fill={getRandomColor()} />
          </svg>
        </div>
      </div>
      <div className='col'>
        <p>
          {data.title}
        </p>
        <button className='fr'>
          <svg class="status-dot" width="10" height="10">
            <circle cx="5" cy="5" r="5" fill="lightgray" />
          </svg>
          {data.tag}
        </button>
      </div>
    </CardDad>
  )
}