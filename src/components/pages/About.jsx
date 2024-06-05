import React from 'react';
import RyanImage from '../../assets/Ryan.jpg'; // Import the image from the assets folder

export default function About() {
  return (
    <div>
      <img src={RyanImage} alt="Ryan Hinson" style={{ height: '400px', padding: '10px' }} />
      <p>I grew up having a passion towards computers from using them to playing video games and to taking them apart and seeing how they work.</p>
      <p>When I am not inside being a hermit I like to go outside and go do something. That could be playing basketball or just hanging out with friends.</p>
      <p>Recently I picked up two new hobbies one being fishing and the other being golf. Both have been really fun to learn and I hope in the future they'll take me to really cool places around the world.</p>
    </div>
  );
}