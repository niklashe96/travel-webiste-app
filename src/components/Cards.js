import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/shanghai.jpg'
                            text='Visit the city of Shanghai and have some good chinese food.'
                            label='Shanghai, China'
                            path='/services'
                        />
                        <CardItem
                            src='images/singapore.jpg'
                            text='Explore the city of Singapore and habe some very nice views.'
                            label='Singapore'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/kyoto.jpg'
                            text='Visit the parks, streets and city of Kyoto.'
                            label='Kyoto, Japan'
                            path='/services'
                        />
                        <CardItem
                            src='images/phuket-thailand.jpg'
                            text='Visit the beaches of Phuket.'
                            label='Phuket, Thailand'
                            path='/services'
                        />
                        <CardItem
                            src='images/tokyo.jpg'
                            text='Explore the city of Tokyo and eat great food, like ramen, sushi and curry.'
                            label='Tokyo, Japan'
                            path='/services'
                            // path='/sign-up'
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;