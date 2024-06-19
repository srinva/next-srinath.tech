import { ComponentType, ReactNode, useState } from "react"
import { IconType } from "react-icons/lib";

type IconProps = {
    text: string;
    Icon: IconType;
};

export const ExpIcon: React.FC<IconProps> = ({text, Icon}: IconProps) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div className='relative flex place-content-center items-center'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
            {isHovering ? 
                (<p className='text-5xl md:text-7xl p-10 absolute z-10 animate-pulse text-white'>
                {text}
            </p>) :
                (
                    <Icon className='text-white text-7xl md:text-9xl'/>
                   )
            }
        </div>
    );

}