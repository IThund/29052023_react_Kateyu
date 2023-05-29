import React from 'react'
import Proj2 from "../assets/proj2.jpg";
// import '../styles/components/About.scss';
import '../styles/About.scss';

function About() {
  return (
    <div>
        <section class="about-section">
            <div className="about-wrap container">
                <div className='banner'>
                    <image src={Proj2}/>
                </div>
                <h5>About</h5>
                <p >
                👋 I'm Kate. Born, raised and currently living in Hong Kong, I am a self taught UX/UI designer and Web Designer. I enjoy designing my way out of interesting problems for brands, products and digital experiences. 
                </p> 
            </div>
        </section>
    </div>
  )
}

export default About