import { ExpTimeline } from '../components/exptimeline';
import NextNProgress from 'nextjs-progressbar';
import { DiJava, DiJsBadge, DiGit, DiMysql, DiPython, DiJavascript } from 'react-icons/di';
import { SiC, SiCsharp } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import Image from 'next/image';
import profileswiss from './/../public/profileswiss.jpg'
import {useState} from 'react';
import { ExpIcon } from './expicon';
import { IconType } from 'react-icons/lib';
import { ProjectCard } from './projectcard';

export const Projects: React.FC = () => {
    //h-[calc(100vh-78px)] 
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return <div id='projects' className="py-10 bg-black-400 min-h-[calc(100vh-78px)]">
        {/* <div className='grid auto-rows-min p-10 '> */}
        <div className='flex flex-row p-10 place-content-center items-center flex-wrap lg:flex-nowrap'>
            <div className='content-center justify-center p-10'>
                <h1 className='text-6xl text-center pb-10'>Projects</h1>
            </div>
        </div>
        {/* <div className='flex flex-row'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div> */}
       

    </div>
}