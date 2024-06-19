import Link from 'next/link';
import {useState} from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export const Contact: React.FC = () => {
    const [isHovering1, setIsHovered1] = useState(false);
    const onMouseEnter1 = () => setIsHovered1(true);
    const onMouseLeave1 = () => setIsHovered1(false);
    const [isHovering2, setIsHovered2] = useState(false);
    const onMouseEnter2 = () => setIsHovered2(true);
    const onMouseLeave2 = () => setIsHovered2(false);
    return <div id='contacts' className="py-10 bg-green-400 min-h-[calc(100vh-78px)/2]">
        {/* <div className='grid auto-rows-min p-10 '> */}
        <div className='flex flex-row p-10 place-content-center items-center flex-wrap lg:flex-nowrap'>
            <div className='content-center justify-center p-10'>
                <h1 className='text-6xl text-center pb-10 text-white'>Get In Touch</h1>
            </div>
        </div>
        <div className='flex flex-row p-10 pb-20 justify-center space-x-52 text-white'>
            <Link href='https://www.linkedin.com/in/srinath-vasudevan-a8a76a18a/' target='_blank'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}>
                <AiFillLinkedin size="350" className={isHovering2 ? 'text-black' : ''}/>
            </Link>
            <Link href='https://github.com/srinva' target='_blank'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}>
                <AiFillGithub size="350" className={isHovering1 ? 'text-black' : ''}/>
            </Link>
        </div>
    </div>
}