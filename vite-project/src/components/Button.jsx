import React from 'react'

const Button = ({btn_Text}) => {
  return (
    <div className='flex items-center justify-center'>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            {btn_Text}
            </button>
    </div>
  )
}

export default Button