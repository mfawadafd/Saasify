import React from 'react'

const Card = ({icons, heading, para}) => {
  return (
    <div className='group rounded-2xl bg-white p-6 text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white'>

        <div className='mb-5 flex items-center justify-center h-14 w-14  rounded-xl bg-primary-100 text-primary-600 transition-colors group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-900/10 dark:text-purple-400'>
        {icons}
        </div>

         <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-900'>
            {heading}
         </h3>

        <p className='mt-3 text-gray-600 dark:gray-400'>
        {para}
        </p>


    </div>
  )
}

export default Card