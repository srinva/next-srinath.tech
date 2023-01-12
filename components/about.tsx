import { ExpTimeline } from '../components/exptimeline';
import NextNProgress from 'nextjs-progressbar';
import { DiJava, DiJsBadge, DiGit, DiMysql, DiPython } from 'react-icons/di';
import { SiC, SiCsharp } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import Image from 'next/image';
import profilefrance from './/../public/profilefrance.jpg'

export const About: React.FC = () => {
    //h-[calc(100vh-78px)] 
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
        <div className='relative'>
            <DiJava 
            className='text-7xl md:text-9xl opacity-100 hover:opacity-0 absolute'
            >
            </DiJava>
                <p className='text-5xl md:text-7xl opacity-0 hover:opacity-100 absolute'>
                    Java
                </p>
        </div>
        <DiPython 
        className='text-7xl md:text-9xl'
        />
        <DiJsBadge 
        className='text-7xl md:text-9xl'
        />
        <SiC 
        className='text-7xl md:text-9xl'
        />
        <DiGit 
        className='text-7xl md:text-9xl'
        />
        <AiOutlineConsoleSql 
        className='text-7xl md:text-9xl'
        />
        <SiCsharp 
        className='text-7xl md:text-9xl'
        />
        <FaAws 
        className='text-7xl md:text-9xl'
        />
        </div>

        {/* <div className='place-self-center p-10'>
            <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/>
        </div> */}

    </div>
}