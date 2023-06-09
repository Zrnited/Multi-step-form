import React, { useState } from 'react'
import classNames from 'classnames';

const Switch = ({ isSelected, setIsSelected }) => {

  return (
    <div onClick={()=>setIsSelected(!isSelected)} className={classNames('flex items-center px-1 w-16 h-[28.5px] bg-gray-600 m-1 rounded-full transition-all duration-500', {
        'bg-marineBlue': isSelected,
    })}>
        <span className={classNames('h-6 w-6 transition-all duration-500 bg-white rounded-full shadow-lg', {
            'ml-8': isSelected,
        })}/>
    </div>
  )
}

export default Switch