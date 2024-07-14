import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export const Cover: React.FC = () => {
    return <div className=' flex flex-col content-center justify-center h-[calc(100vh-78px)]'>
        
        {/* <div className='place-self-center pb-20'>
        <Image 
              priority
              src="/../public/profile.jpg"
              className='rounded-full '
              height={144}
              width={144}
              alt=""
            /></div> */}
        <div className='place-self-center'>
            <p className='place-self-center text-white text-5xl font-bold leading-tight'>Hello World</p>
        </div>
        <div className='place-self-center text-white'>
            <div className='inline-block font-medium leading-tight text-5xl mt-0 mb-2'>
                I&apos;m&nbsp;
            </div>
            <div className='inline-block'>
            <Typewriter 
                options={
                    {
                        loop: true,
                        strings: [
                            ' <strong class="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-400">Srinath.</strong>',
                            ' a Developer.',
                            ' a Cloud Engineer.',
                            ' a Problem Solver.'
                        ],
                        autoStart: true,
                        wrapperClassName: 'font-medium leading-tight text-5xl mt-0 mb-2 text-white',
                        cursorClassName: 'font-medium leading-tight text-5xl mt-0 mb-2 text-white'
                    }
                }
            />
            </div>
      </div>
    </div>
}