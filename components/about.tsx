import { ExpTimeline } from '../components/exptimeline';
import NextNProgress from 'nextjs-progressbar';
import { DiJava, DiJsBadge, DiGit, DiMysql, DiPython, DiJavascript } from 'react-icons/di';
import { SiC, SiCsharp } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import Image from 'next/image';
import profilefrance from './/../public/profilefrance.jpg'
import {useState} from 'react';
import { ExpIcon } from './expicon';
import { IconType } from 'react-icons/lib';

export const About: React.FC = () => {
    //h-[calc(100vh-78px)] 
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return <div id='about' className="py-10 bg-green-400 min-h-[calc(100vh-78px)]">
        {/* <div className='grid auto-rows-min p-10 '> */}
        <div className='flex flex-row p-10 place-content-center items-center flex-wrap lg:flex-nowrap'>
            <>
            <Image 
                // sizes="(min-width: 768px) 80px, 60px"
                src={profilefrance}
                className='rounded-full '
                height={400}
                width={500}
                alt=""
                />
            </>
            <div className='content-center justify-center p-10'>
                <h1 className='text-6xl text-center pb-10'>About Me</h1>
                <p className='text-lg'>
                    Hey! My name is Srinath, and it's great to meet you!
                </p>
                <br/>
                <p className='text-lg'>
                    Currently, I am a 3rd year studying Computer Science at North Carolina State University.
                    I have interests in topics such as Cloud Computing, Software Development, Site Reliability/DevOps, and more!
                    I have various internship and research experience in Computer Science - go ahead and contact me for my Resume.
                    Also feel free to reach out if you would like to collaborate on a project!
                </p>
            </div>
        
        </div>
        <>
        <h2 className='text-5xl text-center pb-10'>Tools and Technologies:</h2>
        </>
        <div className='grid gridrows-2 grid-cols-4 place-items-center gap-10 p-10'>
        <ExpIcon text='Java' Icon={DiJava as IconType}/>
        <ExpIcon text='Python' Icon={DiPython as IconType}/>
        <ExpIcon text='JavaScript' Icon={DiJsBadge as IconType}/>
        <ExpIcon text='C Lang' Icon={SiC as IconType}/>
        <ExpIcon text='Git' Icon={DiGit as IconType}/>
        <ExpIcon text='SQL' Icon={AiOutlineConsoleSql as IconType}/>
        <ExpIcon text='C Sharp' Icon={SiCsharp as IconType}/>
        <ExpIcon text='AWS' Icon={FaAws as IconType}/>
        </div>

    </div>
}