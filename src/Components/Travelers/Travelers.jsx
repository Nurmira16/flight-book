import React from 'react';

const Travelers = () => {

  const travelers=[
    {
      id:1,
      destinationImage:'src/assets/imgBcg.jpeg',
      travelerImage:'src/assets/user1.jpg',
      travelerName:'IsraTech',
      socialLink:'isratech0'
    },
    {
      id:2,
      destinationImage:'src/assets/imgDst2.jpeg',
      travelerImage:'src/assets/user2.jpg',
      travelerName:'Brian',
      socialLink:'brian22'
    },
    {
      id:3,
      destinationImage:'src/assets/imgDst4.jpeg',
      travelerImage:'src/assets/user3.jpg',
      travelerName:'Lina',
      socialLink:'linaray1'
    }
  ]
  return (
    <div className='travelers container section'>
      <div className='sectionContainer'>
        <h2> Top travelers of this month!</h2>

        <div className='travelersContainer grid'>
          {travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
            return (
              <div key={id} className='singleTraveler'>
            <img src={destinationImage} alt="" className='destinationImage'/>
            <div className='travelerDetails'>
              <div className='travelerPicture'>
                <img src={travelerImage} className="travelerImage" />
              </div>
            </div>
            <div className='travelerName'>
              <span>{travelerName}</span>
             <p> {socialLink}</p>
            </div>
          </div>
            )
          })}
        </div>
      </div>
      
    </div>
  );
}

export default Travelers;
