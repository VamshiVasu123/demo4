import React from 'react';
import '../App.css';
import CardItem from '../components/CardItem';
export default function NSS() {
  return <><h1 className='nss'>NSS</h1>
   <div className="cards">
  <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/nss/12.jpg'
              text='“Many of life’s failures are people who did not realize how close they were to success when they gave up.”'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/sac/nss/8.jpg'
              text='“Be yourself; everyone else is already taken.”'
              label='Luxury'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/sac/nss/11.jpg'
              text='“Action may not always bring happiness; but there is no happiness without action.”'
              label='Mystery'
              path=''
            />
            </ul>
            <ul className='cards__items'>

            <CardItem
              src='/images/sac/nss/10.jpg'
              text='“The true meaning of life is to plant trees, under whose shade you do not expect to sit.”'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/sac/nss/13.jpg'
              text='“Keep your eyes on the stars, and your feet on the ground.”'
              label='Adrenaline'
              path=''
            />
           
          </ul>
        </div>
        </div></div> 
  </>
}