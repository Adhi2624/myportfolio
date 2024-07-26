
import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Lottie from 'react-lottie';
import animationData from '../../assests/hi';

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
   <section className='home container' id='home'>
   <div className='intro'>
   <Lottie 
	    options={defaultOptions}
        height={160}
        width={160}
        className='home__img'
      />
    {/* <img src= "https://i.ibb.co/zS38BWV/9434621.png" height={145} width={160} alt='' className='home__img'/> */}
    <h1 className='home__name'>Adhithiyan Ravi</h1>
    <span className='home__education'>
    I am a MERN stack developer and ML enthusiast
    </span>

    <HeaderSocials/>

   
    <ScrollDown/>
   </div>

   <Shapes/>

   </section> 
  )
}

export default Home

