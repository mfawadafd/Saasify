import React from 'react'
import Title from '../components/Title'

const Testimonials = () => {
  return (
    <section id='Testimonials' className='bg-gray-100 py-20 lg:py-28 text-center'>
        <div className='mb-4 inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-600 '>
        <Title text1={"Testimonials"}/>
        </div>
        <div className='text-5xl font-bold'>
            <Title text1={'Loved by teams '} text2={'worldwide'}/>
        </div>
    </section>
  )
}

export default Testimonials