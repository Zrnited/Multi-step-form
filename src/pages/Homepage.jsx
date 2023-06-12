import React, { useState } from 'react'
// import sidebarImg from '../assets/sidebar-mobile.png'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import Plans from '../components/Plans'
import Addons from '../components/Addons';
import Summary from '../components/Summary';

const Homepage = () => {

  // const [plans, setPlans] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [switchAddon, setSwitchAddon] = useState(false)
  const [formCount, setFormCount] = useState(0);

  const increaseFormCount = () => {
    if(formCount !== 3){
      setFormCount(formCount + 1);
    } else {
      return
    }
    console.log(formCount);
  }

  const decreaseFormCount = () => {
    if(formCount !== 0){
      setFormCount(formCount - 1);
    } else {
      return
    }
    console.log(formCount);
  }

  return (
    <div className='md:flex md:justify-center md:items-center md:h-screen'>
        <div className='relative flex justify-center md:bg-white md:p-5 md:gap-2 md:rounded-lg md:items-center md:static'>
            <aside className='h-[170px] w-full bg-[url("./assets/sidebar-mobile.png")] bg-red-600 bg-cover bg-no-repeat flex justify-center md:bg-[url("./assets/sidebar-desktop.png")] md:h-[600px] md:w-[250px] md:rounded-xl md:justify-start md:pl-7 lg:w-300px]'>

              {/* hidden in desktop view */}
              <div className='flex gap-5 flex-row mt-8 md:hidden'>
                <button className='border border-white rounded-full text-white font-semibold h-[35px] w-[35px]'>
                  1
                </button>
                <button className='border border-white rounded-full text-white font-semibold h-[35px] w-[35px]'>
                  2
                </button>
                <button className='border border-white rounded-full text-white font-semibold h-[35px] w-[35px]'>
                  3
                </button>
                <button className='border border-white rounded-full text-white font-semibold h-[35px] w-[35px]'>
                  4
                </button>
              </div>

              {/* Shown in desktop view */}
              <div className='hidden md:flex flex-col gap-10 pt-16'>
                <div className='flex flex-row items-center gap-4'>
                  <button className='border border-white rounded-full text-white font-semibold h-[35px] w-[35px]'>
                    1
                  </button>
                  <div className='flex flex-col'>
                    <p className='uppercase text-lightGray text-sm'>step 1</p>
                    <h2 className='uppercase text-white font-semibold text-sm tracking-widest'>your info</h2>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-5'>
                  <button className='border border-white rounded-full text-white font-semibold h-[35px] w-[35px]'>
                    2
                  </button>
                  <div className='flex flex-col'>
                    <p className='uppercase text-lightGray text-sm'>step 2</p>
                    <h2 className='uppercase text-white font-semibold text-sm tracking-widest'>select plan</h2>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-5'>
                  <button className='border border-white rounded-full text-white font-semibold h-[35px] w-[35px]'>
                    3
                  </button>
                  <div className='flex flex-col'>
                    <p className='uppercase text-lightGray text-sm'>step 3</p>
                    <h2 className='uppercase text-white font-semibold text-sm tracking-widest'>add-ons</h2>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-5'>
                  <button className='border border-white rounded-full text-white font-semibold h-[35px] w-[35px]'>
                    4
                  </button>
                  <div className='flex flex-col'>
                    <p className='uppercase text-lightGray text-sm'>step 4</p>
                    <h2 className='uppercase text-white font-semibold text-sm tracking-widest'>summary</h2>
                  </div>
                </div>
              </div>
            </aside>
            {formCount === 0 && (<div className='absolute top-24 flex flex-col bg-white p-6 w-[95%] rounded-lg md:static md:w-[70%] lg:w-[700px] lg:px-20'>
              <h1 className='text-left text-2xl font-semibold mb-3 text-marineBlue lg:text-4xl'>Personal info</h1>
              <p className=' text-coolGray lg:text-lg'>Please provide your name, email address, and phone number.</p>

              <form className='w-full flex flex-col gap-5 mt-6'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="name" className='text-marineBlue font-medium lg:text-lg'>Name</label>
                  <input 
                    placeholder='e.g. Stephen King'
                    type='text'
                    className='border-[1px] border-coolGray text-marineBlue py-2 px-3 rounded-sm focus:outline-none focus:border-2 lg:py-3'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="email" className='text-marineBlue font-medium lg:text-lg'>Email address</label>
                  <input 
                    placeholder='e.g. stephenking@lorem.com'
                    type='email'
                    className='border-[1px] border-coolGray text-marineBlue py-2 px-3 rounded-sm focus:outline-none focus:border-2 lg:py-3'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="phoneNumber" className='text-marineBlue font-medium lg:text-lg'>Phone number</label>
                  <input 
                    placeholder='e.g. +1 234 567 890'
                    type='number'
                    className='border-[1px] border-coolGray text-marineBlue py-2 px-3 rounded-sm focus:outline-none focus:border-2 lg:py-3'
                  />
                </div>
              </form>

              {/* Shown in desktop view */}
              <div className='hidden mt-24 w-full md:flex justify-between items-center'>
                <Link to={'/'} className='text-coolGray hover:underline'>
                  Go back
                </Link>
                <button className='w-[100px] h-[40px] rounded-sm bg-marineBlue text-white lg:text-lg lg:w-[130px] lg:h-[43px] hover:opacity-95 transition-all ease-in-out delay-100 cursor-pointer'>
                  Next Step
                </button>
              </div>
            </div>)}
            {formCount === 1 && (<Plans isSelected={isSelected} setIsSelected={setIsSelected} />)}
            {formCount === 2 && <Addons isSelected={switchAddon} setIsSelected={setSwitchAddon} />}
            {formCount === 3 && <Summary />}
        </div>

        {/* hidden in desktop view */}
        <div className='bg-white px-4 py-3 w-full flex justify-between absolute bottom-0 items-center md:hidden'>
          <Link onClick={decreaseFormCount} to={'/'} className='text-coolGray'>
            Go back
          </Link>
          <button className={classNames('w-[100px] h-[40px] rounded-[5px] bg-marineBlue text-white', {
            'bg-purplishBlue': formCount === 3,
          })} onClick={increaseFormCount}>
            {formCount === 3 ? 'Confirm' : 'Next step'}
          </button>
        </div>
    </div>
  )
}

export default Homepage