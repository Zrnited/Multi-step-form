import React from 'react'
import classNames from 'classnames'

const Summary = () => {
  return (
    <div className={classNames('absolute top-24 flex flex-col bg-white p-6 w-[95%] rounded-lg md:static md:w-[70%] lg:w-[700px] lg:px-20')}>
      <div>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <div className='bg-slate-100 p-4 rounded-md'>
        <div className='flex flex-row w-full justify-between'>
          <div>
            <bold className='font-semibold text-marineBlue'>
              Arcade (Monthly)
            </bold>
            <p className='text-sm underline'>Change</p>
          </div>
          <p className='font-semibold text-marineBlue'>$9/mo</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Summary