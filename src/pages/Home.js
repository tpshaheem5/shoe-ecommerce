import React from 'react'
import Navebar from './Navebar';



function Home() {
  return (
    <div className='BACKGROUND_IMG'>
      <Navebar/>

    <div >
      <h1 style={{color:'white',marginTop:'22%',marginLeft:'10px'}}>NEVER BEFORE.</h1>
      <h1 style={{color:'white',marginLeft:'10px'}}>FOREEVER AFTER.</h1>
      <h6 style={{color:'white',marginLeft:'10px'}}>Blending court-side attitude with a modern<br/>touch for your everyday style</h6>
      <button style={{marginLeft:'10px'}}>SHOP MEN</button>
      <button style={{marginLeft:'10px'}}>SHOP WOMEN</button>
    </div>
  </div>
  );
}

export default Home;