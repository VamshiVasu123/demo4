import React from 'react';
import '../App.css';
import '../components/Cards.css';
import CardItem from '../components/CardItem';
export default function ACM() {
  return (<>
  <h1 className='acm'>ACM</h1>
  <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className="card__items">
          <CardItem
              src='/images/img-8.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
          </ul>
  <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          </div></div>
  </>
  )
}