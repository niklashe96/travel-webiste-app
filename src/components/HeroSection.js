import React from 'react'
import Button from './Button'
import './HeroSection.css';
import $ from "jquery"


function HeroSection() {

    function handleScroll() {
        window.scroll({
          top: 850,
          left: 0, 
          behavior: 'smooth',
        });
      }

    return (
        <div className='hero-container'>
            <video src='/videos/video-5.mp4' autoPlay loop muted />
            <h1>Pick your next destination</h1>
            <div className='hero-btns'>
                <Button
                    onClick = {handleScroll}
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    value='GET STARTED'
                />

                {/* <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                    value='WATCH TRAILER '
                /> */}

            </div>
        </div>
    )
}

export default HeroSection
