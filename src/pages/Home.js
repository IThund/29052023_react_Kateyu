import React from 'react';
//import ProjectItem from '../components/Projectitem';
import "../styles/Projects.scss";
//import porject list
//import {ProjectList} from '../helpers/ProjectList';
import Project from './Projects';
import Work from './Work';

function Home() {
  return (
    <div className='home'>
      <Project/>
      <Work/>
    </div>
    
  )
}

export default Home