import React, { useState, useEffect } from 'react';
import { AppHeader } from '../cmps/AppHeader';
import topDarkSvg from '../assets/imgs/svg/bg-pattern-home-1.svg';
import topBrightSvg from '../assets/imgs/svg/bg-pattern-home-2.svg';
import middleDarkSvg from '../assets/imgs/svg/bg-pattern-home-3.svg';
import personSvg from '../assets/imgs/svg/icon-person.svg';
import cogSvg from '../assets/imgs/svg/icon-cog.svg';
import chartSvg from '../assets/imgs/svg/icon-chart.svg';
export function HomePage() {

  useEffect(() => {
  }, []);



  return (
    <div className='main-layout'>
      <section className='home-top main-layout full-layout'>
        <div className='middle-layout'>
      <AppHeader/>
        <article className='top-content middle-layout'>
          <div className='dark-top-svg'>
          <img src={topDarkSvg} alt="left circle"/>
          </div>
          <div><h1>Find the <br/> best <span>talent</span></h1></div>
          <div className='top-text'><p>
          Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
            </p></div>
          <img className='bright-top-svg' src={topBrightSvg} alt="bottom circle"/>
        </article>
        </div>

      </section>
      <section className='home-middle full-layout main-layout'>
        <div className='flex justify-between middle-layout'>
        <div className='middle-left'><p>
        Build & manage distributed teams like no one else.
          </p></div>
        <div className='cards-container'>
          <div className='card card-a'>
          <img className='' src={personSvg} alt="person"/>
          <article className='middle-texts'>
            <p className='pink'>Experienced Individuals</p>
            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
          </article>
          </div>
          <div className='card card-b'>
          <img className='' src={cogSvg} alt="cog"/>
          <article className='middle-texts'>
            <p className='pink'>Easy to Implement</p>
            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
          </article>
          </div>
          <div className='card card-c'>
          <img className='' src={chartSvg} alt="chart"/>
          <article className='middle-texts'>
            <p className='pink'>Enhanced Productivity</p>
            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
          </article>
          </div>
        </div>
        </div>
        <div className='half-div'>
        <img className='middle-svg' src={middleDarkSvg} alt="left circle"/>
        </div>
      </section>
      <section className='full-bottom full-layout'>
    
      </section>
    </div>
  );
}
