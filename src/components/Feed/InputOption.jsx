import React from 'react'

function InputOption({ Icon, title, color }) {
  return (
    <div className='flex p-2 items-center text-gray-500 cursor-pointer
    hover:bg-gray-200 rounded-lg'>
      <Icon style={{ color }} />
      <h4 className='ml-3'>{title}</h4>
    </div>
  )
}

export default InputOption