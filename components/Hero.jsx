import Link from 'next/link';
import {RiArrowDownSLine, RiBriefcaseFill, RiTeamFill, RiTodoFill} from 'react-icons/ri'
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import Socials from './Socials';
import DevImg from './DevImg';
import Badge from './Badge';

const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
            <div className="container mx-auto">
              <div className="flex justify-between gap-x-8">
               <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left' >
                <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                    Web Developer
                </div>
                <h1 className='h1 mb-4'>Hello, my name is Sabbir Ahmed</h1>
                <p className='subtitle max-w-[490px] mx-auto xl:mx-0 '>Brief description with insights into myself, my vocational journey, and what I engage in professionally</p>
                <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                    <Link href='/contact'>
                        <Button className='gap-x-2'> Contact me <Send  size={18}/></Button>
                    </Link>
                    <Link href='https://drive.google.com/file/d/1Mwpod-Zt_yAWkSqnYrVJvm78MAtRTzAg/view?usp=drive_link' target="_blank">
                    <Button variant='secondary' className='gap-x-2'>Download Resume <Download size={18} /></Button>
                    </Link>
                </div>
                <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0'
               iconStyles='text-foreground text-[32px] shadow-md hover:text-primary transition-all' />
               </div>
              
            <div className='hidden xl:flex relative'>
              
        
                <div className='absolute -top-1 -right-2 '>

                </div>
                <DevImg containerStyles='w-[505px] h-[505px]  bg-no-repeat relative bg-bottom' imgSrc='/hero/developer1.png' />
            </div>
              </div>
              <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary"/>
              </div>
            </div>
        </section>
    );
};

export default Hero;