import {useState} from 'react';

import { ProjectCard } from './projectcard';

export const Projects: React.FC = () => {
    //h-[calc(100vh-78px)] 
    return <div id='projects' className="py-10 bg-black-400 min-h-[calc(100vh-78px)/2]">
        {/* <div className='grid auto-rows-min p-10 '> */}
        <div className='flex flex-row p-10 place-content-center items-center flex-wrap lg:flex-nowrap'>
            <div className='content-center justify-center p-10'>
                <h1 className='text-6xl text-center pb-10'>Featured Projects</h1>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row p-10 pb-20 '>
            <ProjectCard url="https://github.com/srinva/next-srinath.tech" title="Personal Website" text="I maintain a personal website to showcase a few projects as well as general information about myself here. 
            Development in ongoing and new things are always being added!"/>
            <ProjectCard url="https://drive.google.com/file/d/17wMUM2Y907Z8FHfmGijMBu2djAmKiJMW/view" title="Nature-Inspired Algorithms Research" text="I conducted an undergraduate research project to explore the use of an optimization algorithm 
            inspired by the herding behavior of elephants in a text summarization context"/>
            <ProjectCard url="https://github.com/srinva/class-mapper" title="Class Mapper" text="This project was created during the NCSU 2022 PackHacks annual Hackathon. I created this with a partner in order to map
            sustainable transportation routes to class. The project won 1st place in the sustainability track."/>
        </div>
       

    </div>
}