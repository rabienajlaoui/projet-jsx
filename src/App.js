import './style.css';

import React  from 'react';
import image from './th.jpg';
import video from  './video1.mp4';


function App() {

  return (

    <div>
       <h1 className="title red">Rabie najlaoui</h1>


      <img src= {image} alt='naturel'/>
      <h3> image 2</h3>
      <br/>

      <img src={`${process.env.PUBLIC_URL}/OIP.jpg`} alt=''/>

        <h2> video</h2>
      <br/>
      <video width="320" height="240" controls>

 <source src={video} type="video/mp4" />

</video>


    </div>

  );
}

export default App;