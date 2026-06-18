import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='flex item-center justify-center '>
        <p className='text-gray-700'>{text1}{text2}</p>
    </div>
  )
}

export default Title