import React, { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom';

const Summary = ({ year, setYear}) => {

  return (
    <div className={classNames('absolute top-24 flex flex-col bg-white p-6 w-[95%] rounded-lg md:static md:w-[70%] lg:w-[700px] lg:px-20')}>
      <div className='flex flex-col gap-2 mb-5'>
        <h1 className='text-marineBlue font-semibold text-2xl tracking-wide lg:text-4xl'>Finishing up</h1>
        <p className='font-medium text-coolGray'>Double-check everything looks OK before confirming.</p>
      </div>
      <div className='bg-slate-100 p-4 rounded-md'>
        <div className='flex flex-row w-full justify-between items-center'>
          <div>
            {!year && (<bold className='font-semibold text-marineBlue'>
              Arcade (Monthly)
            </bold>)}
            {year && (<bold className='font-semibold text-marineBlue'>
              Arcade (Yearly)
            </bold>)}
            <p className='underline text-coolGray'>Change</p>
          </div>
          {!year && (<p className='font-semibold text-marineBlue'>$9/mo</p>)}
          {year && (<p className='font-semibold text-marineBlue'>$90/yr</p>)}
        </div>
        <hr className='mt-3' />
        <div className='flex flex-row justify-between items-center my-3'>
          <p className='text-coolGray'>Online service</p>
          {!year && <p className='font-medium text-marineBlue'>+$1/mo</p>}
          {year && <p className='font-medium text-marineBlue'>+$10/yr</p>}
        </div>
        <div className='flex flex-row justify-between items-center my-3'>
          <p className='text-coolGray'>Larger storage</p>
          {!year && <p className='font-medium text-marineBlue'>+$2/mo</p>}
          {year && <p className='font-medium text-marineBlue'>+$20/yr</p>}
        </div>
      </div>
      <div className='flex flex-row justify-between items-center mt-6 w-[98%]'>
        {!year && <p className='text-coolGray'>Total (per month)</p>}
        {year && <p className='text-coolGray'>Total (per year)</p>}
        {!year && <p className='font-semibold text-purplishBlue text-[17px]'>+$12/mo</p>}
        {year && <p className='font-semibold text-purplishBlue text-[17px]'>+$120/yr</p>}
      </div>

      {/* Shown in desktop mode */}
      <div className='hidden mt-20 w-full md:flex justify-between items-center'>
        <Link to={'/'} className='text-coolGray hover:underline hover:text-marineBlue transition-all duration-500'>
          Go back
        </Link>
        <button className='w-[100px] h-[40px] rounded-sm bg-marineBlue text-white lg:text-lg lg:w-[130px] lg:h-[43px] hover:opacity-95 transition-all ease-in-out delay-100 cursor-pointer'>
          Next Step
        </button>
      </div>
    </div>
  )
}

export default Summary