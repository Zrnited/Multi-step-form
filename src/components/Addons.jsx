import React from 'react'
import { Link } from 'react-router-dom'
import Switch from './Switch'
import classNames from 'classnames'

const Addons = ({ isSelected, setIsSelected }) => {
  return (
    <div className={classNames('absolute top-24 flex flex-col bg-white p-6 w-[95%] rounded-lg md:static md:w-[70%] lg:w-[700px] lg:px-20')}>

      {/* Monthly */}
      {!isSelected && (<div>
        <h1 className='text-left text-2xl font-semibold text-marineBlue sm:mb-3 lg:text-4xl'>Pick add-ons</h1>
        <p className=' text-coolGray text-sm sm:text-base lg:text-lg'>Add-ons help enhance your gaming experience.</p>
        <div className='py-5 flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center justify-between border-[1.5px] border-coolGray rounded-lg p-3 hover:bg-slate-100 transition-all ease-in-out delay-100 cursor-pointer hover:border-marineBlue'>
            <div className='flex flex-row gap-6 items-center lg:pl-3'>
              <input type='checkbox' className='h-[20px] w-[20px]' />
              <div className='flex flex-col'>
                <h2 className='font-semibold text-marineBlue lg:text-xl'>Online service</h2>
                <p className='text-coolGray text-xs sm:text-sm lg:text-base'>Access to multiplayer games</p>
              </div>
            </div>
            <p className='text-sm text-purplishBlue font-semibold lg:text-base'>+$1/mo</p>
          </div>
          <div className='flex flex-row gap-4 items-center justify-between border-[1.5px] border-coolGray rounded-lg p-3 hover:bg-slate-100 transition-all ease-in-out delay-100 cursor-pointer hover:border-marineBlue'>
            <div className='flex flex-row gap-6 items-center lg:pl-3'>
              <input type='checkbox' className='h-[20px] w-[20px]' />
              <div className='flex flex-col'>
                <h2 className='font-semibold text-marineBlue lg:text-xl'>Larger storage</h2>
                <p className='text-coolGray text-xs sm:text-sm  lg:text-base'>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className='text-sm text-purplishBlue font-semibold'>+$2/mo</p>
          </div>
          <div className='flex flex-row gap-4 items-center justify-between border-[1.5px] border-coolGray rounded-lg p-3 hover:bg-slate-100 transition-all ease-in-out delay-100 cursor-pointer hover:border-marineBlue'>
            <div className='flex flex-row gap-6 items-center lg:pl-3'>
              <input type='checkbox' className='h-[20px] w-[20px]' />
              <div className='flex flex-col'>
                <h2 className='font-semibold text-marineBlue lg:text-xl'>Customizable profile</h2>
                <p className='text-coolGray text-xs sm:text-sm  lg:text-base'>Customize theme on your profile</p>
              </div>
            </div>
            <p className='text-sm text-purplishBlue font-semibold'>+$2/mo</p>
          </div>
        </div>
      </div>)}

      {/* Yearly */}
      {isSelected && (<div>
        <h1 className='text-left text-2xl font-semibold text-marineBlue sm:mb-3 lg:text-4xl'>Pick add-ons</h1>
        <p className=' text-coolGray text-sm sm:text-base lg:text-lg'>Add-ons help enhance your gaming experience.</p>
        <div className='py-5 flex flex-col gap-4'>
          <div className='flex flex-row gap-4 items-center justify-between border-[1.5px] border-coolGray rounded-lg p-3 hover:bg-slate-100 transition-all ease-in-out delay-100 cursor-pointer hover:border-marineBlue'>
            <div className='flex flex-row gap-6 items-center lg:pl-3'>
              <input type='checkbox' className='h-[20px] w-[20px]' />
              <div className='flex flex-col'>
                <h2 className='font-semibold text-marineBlue lg:text-xl'>Online service</h2>
                <p className='text-coolGray text-xs sm:text-sm lg:text-base'>Access to multiplayer games</p>
              </div>
            </div>
            <p className='text-sm text-purplishBlue font-semibold'>+$10/yr</p>
          </div>
          <div className='flex flex-row gap-4 items-center justify-between border-[1.5px] border-coolGray rounded-lg p-3 hover:bg-slate-100 transition-all ease-in-out delay-100 cursor-pointer hover:border-marineBlue'>
            <div className='flex flex-row gap-6 items-center lg:pl-3'>
              <input type='checkbox' className='h-[20px] w-[20px]' />
              <div className='flex flex-col'>
                <h2 className='font-semibold text-marineBlue lg:text-xl'>Larger storage</h2>
                <p className='text-coolGray text-xs sm:text-sm lg:text-base'>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className='text-sm text-purplishBlue font-semibold'>+$20/yr</p>
          </div>
          <div className='flex flex-row gap-4 items-center justify-between border-[1.5px] border-coolGray rounded-lg p-3 hover:bg-slate-100 transition-all ease-in-out delay-100 cursor-pointer hover:border-marineBlue'>
            <div className='flex flex-row gap-6 items-center lg:pl-3'>
              <input type='checkbox' className='h-[20px] w-[20px]' />
              <div className='flex flex-col'>
                <h2 className='font-semibold text-marineBlue lg:text-xl'>Customizable profile</h2>
                <p className='text-coolGray text-xs sm:text-sm lg:text-base'>Customize theme on your profile</p>
              </div>
            </div>
            <p className='text-sm text-purplishBlue font-semibold'>+$20/yr</p>
          </div>
        </div>
      </div>)}


      <div className='bg-slate-100 p-2 flex flex-row justify-around items-center sm:mt-2'>
          <h1 className='font-medium text-coolGray'>Monthly</h1>
          <Switch isSelected={isSelected} setIsSelected={setIsSelected} />
          <h1 className='font-medium text-coolGray'>Yearly</h1>
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

export default Addons