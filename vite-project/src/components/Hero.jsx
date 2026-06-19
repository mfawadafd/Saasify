import Title from './Title'
import Button from './Button'
import Features from '../pages/Features'
import Pricing from '../pages/Pricing'
import { ArrowRight, CirclePlay } from 'lucide-react'


const Hero = () => {
    return (
        // Hero section
        <div className='w-full min-h-screen overflow-x-hidden text-center font-medium bg-linear-to-b from-primary-50 to-white dark:from-purple-50 dark:to-purple-50 '>

            <div className='inline-flex max-w-[90vw] flex-wrap justify-center border rounded-full mt-20 p-2 items-center gap-2 text-sm sm:text-base'>
                <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-purple-500"></span>
                </span>
                <p className='text-purple-500'>Now with AI-powered automation</p>

            </div>

            <div className='text-4xl sm:text-5xl md:text-6xl text-center leading-tight px-4 wrap-break-word '>
                <Title text1={'Build better '} text2={'products,'} />
                <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent ">
                    faster than ever
                </span> 
               <div className='max-w-2xl mx-auto px-4 mt-4'>
                 <p className='text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl wrap-break-word text-center leading-relaxed'>The all-in-one platform that helps teams ship quality software. Automate workflows, collaborate seamlessly, and scale with confidence.</p>
               </div>
               <div className='mt-8 flex md:flex items-center justify-center gap-4'>
                <Button btn_Text={'Start free trial'} icon={<ArrowRight size={16}/>} className="text-base md:text-lg py-3 px-6" />
                <Button btn_Text={'Watch demo'} variant='secondary' icon={<CirclePlay size={16} />} iconPosition='left'  className="text-base md:text-lg py-3 px-6" />
               </div>
               <hr className='w-4/5 max-w-3xl mx-auto border-gray-300 mt-14'/>
            </div>
            <>
            <Features />
            <Pricing/>
            </>
        </div>

    )
}

export default Hero
