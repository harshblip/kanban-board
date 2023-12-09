import React from 'react'
import Card from '../Card/Card'

const images = [
  'images/p1.jpg', 'images/p2.jpg',
  'images/p3.jpg', 'images/p4.jpg',
  'images/p5.jpg'
];

const colors = ['orange', 'lightgray', 'green'];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export default function UCards({ tickets, users, user }) {
  let cnt = 0;
  const filteredTickets = users.filter(userr => userr.name === user).flatMap((index, x) => {
    const userTickets = tickets.filter(tix => tix.userId === index.id);
    cnt += userTickets.length;
    return userTickets;
  });

  return (
    <div>
      <div>
        <div className='userD'>
          <div>
            <img src={getRandomImage()} alt="p1" className='pfp' />
            <svg class="status-dot" width="10" height="10">
              <circle cx="5" cy="5" r="10" fill={getRandomColor()} />
            </svg>
            <div className='r'>
              <span className='username'>
                {user}
              </span>
              <span className='fn'>
                {cnt}
              </span>
            </div>
          </div>
          <div>
            <span className='material-symbols-outlined'>
              add
            </span>
            <span className='material-symbols-outlined'>
              more_horiz
            </span>
          </div>
        </div>
        {filteredTickets.map((ind, y) => {
          return <Card data={ind} key={y} />
        })}
      </div>
    </div>
  )
}