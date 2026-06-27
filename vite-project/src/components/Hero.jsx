import Title from './Title'
import Button from './Button'
import Features from '../pages/Features'
import Pricing from '../pages/Pricing'
import { ArrowRight, CirclePlay } from 'lucide-react'
import useScrollReveal from '../Hooks/useScrollReveal'
import heroDashboard from '../assets/hero-dashboard.svg'
import Testimonials from '../pages/Testimonials'


const Hero = () => {
    const [buttonsRef, showButtons] = useScrollReveal(0.3)
    const [ref, isVisible] = useScrollReveal(0.3)
    const [dashboardRef, showDashboard] = useScrollReveal(0.3)

    return (
        // Hero section
        <div id='Hero' className='w-full min-h-screen overflow-x-hidden text-center font-medium bg-linear-to-b from-primary-50 to-white dark:from-purple-50 dark:to-purple-50 '>

            <div className='inline-flex max-w-[90vw] flex-wrap justify-center border rounded-full mt-30 p-2 items-center gap-2 text-sm sm:text-base'>
                <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-purple-500"></span>
                </span>
                <p className='text-purple-500'>Now with AI-powered automation</p>

            </div>

            <div className='text-4xl sm:text-5xl md:text-6xl text-center leading-tight px-4 wrap-break-word mt-5 '>
                <Title text1={'Build better '} text2={'products,'} />
                <span className="bg-linear-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent ">
                    faster than ever
                </span>
                <div className='max-w-2xl mx-auto px-4 mt-4'>
                    <p className='text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl wrap-break-word text-center leading-relaxed'>The all-in-one platform that helps teams ship quality software. Automate workflows, collaborate seamlessly, and scale with confidence.</p>
                </div>
                {/* ----------Buttons---------- */}
                <div ref={buttonsRef} className={`mt-8 flex md:flex items-center justify-center gap-4 transition-all duration-700 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} `}>
                    <Button btn_Text={'Start free trial'} icon={<ArrowRight size={16} />} className="text-base md:text-lg py-3 px-6" />
                    <Button btn_Text={'Watch demo'} variant='secondary' icon={<CirclePlay size={16} />} iconPosition='left' className="text-base md:text-lg py-3 px-6" />
                </div>
            </div>
            {/* -------Numbers Sections------- */}
            <div ref={ref} className={`mx-auto max-w-4xl mt-16 grid grid-cols-2 gap-8 border-t pt-10 sm:grid-cols-4 border-gray-300 dark:border-gray-400 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className='text-center'>
                    <div className='text-3xl font-bold text-gray-900 lg:text-4xl dark:text-gray-900'>
                        10K+
                    </div>
                    <div className='mt-1 text-sm text-gray-600 dark:text-gray-400'>Active Users</div>
                </div>
                <div className='text-center'>
                    <div className='text-3xl font-bold text-gary-900 lg:text-4xl dark:text-gray-900'>
                        10K+
                    </div>
                    <div className='mt-1 text-sm text-gray-600 dark:text-gray-400'>Active Users</div>
                </div>
                <div className='text-center'>
                    <div className='text-3xl font-bold text-gary-900 lg:text-4xl dark:text-gray-900'>
                        10K+
                    </div>
                    <div className='mt-1 text-sm text-gray-600 dark:text-gray-400'>Active Users</div>
                </div>
                <div className='text-center'>
                    <div className='text-3xl font-bold text-gary-900 lg:text-4xl dark:text-gray-900'>
                        10K+
                    </div>
                    <div className='mt-1 text-sm text-gray-600 dark:text-gray-400'>Active Users</div>
                </div>
            </div>
            {/* ---------Dashboard Image Section-------- */}
            <div ref={dashboardRef} className={`mt-16 lg:mt-24 transition-all duration-700 ease-out ${showDashboard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className='relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800'>
                    <img src={heroDashboard} alt="" className='block w-full' loading='eager' />

                </div>

            </div>
            <div>

                <Features />

                <Pricing />

                <Testimonials/>

            </div>


        </div>

    )
}

export default Hero
