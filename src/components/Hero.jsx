import React from 'react'
import "../styles/hero.css";

function Hero() {
    return (
        <section className='hero'>
            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>
            <div className="inner">
                <h2>안녕하세요, 김혜영입니다.</h2>
                <p>Web Publisher · Frontend Developer</p>
            </div>
        </section>
    )
}

export default Hero