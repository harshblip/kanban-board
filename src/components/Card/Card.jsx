import React from 'react'
import styled from 'styled-components'
import './Card.css'

const CardDad = styled.div`
max-width: 10rem;
min-width: 16rem;
height: 3rem;
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
  // console.log('data.title')
  console.log(data.id, data.title);
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
            <circle cx="5" cy="5" r="10" fill={getRandomColor()} />
          </svg>
        </div>
      </div>
      <div className='col'>
        <p>
          {data.title}
        </p>
        <div className='e'>
          <span className='material-symbols-outlined'>
            more_horiz
          </span>
          <button className='fr'>
            <svg class="status-dot1" width="10" height="10">
              <circle cx="5" cy="5" r="5" fill="lightgray" />
            </svg>
            <span>
              {data.tag}
            </span>
          </button>
        </div>
      </div>
    </CardDad>
  )
}