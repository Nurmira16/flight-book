import React from 'react';

const Home = () => {
  return (
    <div className='flex home container'>
      <div className='mainText'>
        <h1>Create Ever-lasting memories With Us</h1>
      </div>
      <div className='homeImages flex'>
        <div className='videoDiv'>
          <video src='src/assets/back.mp4' autoPlay muted loop className='video'></video>
        </div>
        <img src='src/assets/plane-removebg-preview.png' className='plane'/>
      </div>
    </div>
  );
}

export default Home;
