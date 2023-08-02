import {MouseEventHandler, useState} from 'react';
import styles from "../styles/ProjectCard.module.css"
import Link from 'next/link';
type ProjectProps = {
    text: string;
    title: string;
    url: string;
};

export const ProjectCard: React.FC<ProjectProps> = ({text, title, url}: ProjectProps) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter: MouseEventHandler<HTMLDivElement> = () => setIsHovered(true);
    const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => setIsHovered(false);
    return <div className="max-w-xs mx-auto flex items-center space-x-4"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
    <div >
        {isHovering ? 
        (<div className='bg-green-400 rounded-xl shadow-lg p-4'>
            <h2 className="text-xl font-bold text-white text-center p-3">{title}</h2>
            <div className={styles.overlapGrid}>
            <Link href={url} target="_blank" className="text-white p-3 z-0">{text}</Link>
            </div>
            </div>)
        :
        (<div className='bg-white rounded-xl shadow-lg p-4'>
        <h2 className="text-xl font-bold text-gray-800 text-center p-3">{title}</h2>
        <p className="text-gray-600 p-3">{text}</p>
        </div>)}
    </div>
    </div>

}