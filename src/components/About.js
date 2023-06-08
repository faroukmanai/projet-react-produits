import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

const About = () => {
  return (
    <>
        <div>
        <h1>About</h1>
        <p className='homeIntro'>Je suis fier de vous présenter Fake Amazon, un site qui combine ma passion pour le développement web et mon intérêt pour le commerce électronique. J'espère que vous apprécierez votre expérience de shopping sur ce site fictif.</p>
        </div>
    </>
  );
};

export default About;
