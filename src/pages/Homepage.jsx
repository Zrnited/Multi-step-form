import React from 'react'
// import sidebarImg from '../assets/sidebar-mobile.png'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='md:flex md:justify-center md:items-center md:h-screen'>
        <div className='relative flex justify-center md:bg-white md:p-5 md:gap-2 md:rounded-lg md:static'>
            <aside className='h-[170px] w-full bg-[url("./assets/sidebar-mobile.png")] bg-red-600 bg-cover bg-no-repeat flex justify-center md:bg-[url("./assets/sidebar-desktop.png")] md:h-[600px] md:w-[250px] md:rounded-xl lg:w-270px]'>
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
            </aside>
            <div className='absolute top-24 flex flex-col bg-white p-6 w-[95%] rounded-lg md:static md:w-[70%] lg:w-[700px] lg:px-20'>
              <h1 className='text-left text-2xl font-semibold mb-3 text-marineBlue lg:text-4xl'>Personal info</h1>
              <p className=' text-coolGray lg:text-lg'>Please provide your name, email address, and phone number.</p>

              <form className='w-full flex flex-col gap-5 mt-6'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="name" className='text-marineBlue font-medium'>Name</label>
                  <input 
                    placeholder='e.g. Stephen King'
                    type='text'
                    className='border-[1px] border-coolGray text-coolGray py-2 px-3 rounded-sm focus:outline-none focus:border-2'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="email" className='text-marineBlue font-medium'>Email address</label>
                  <input 
                    placeholder='e.g. stephenking@lorem.com'
                    type='email'
                    className='border-[1px] border-coolGray text-coolGray py-2 px-3 rounded-sm focus:outline-none focus:border-2'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="phoneNumber" className='text-marineBlue font-medium'>Phone number</label>
                  <input 
                    placeholder='e.g. +1 234 567 890'
                    type='number'
                    className='border-[1px] border-coolGray text-coolGray py-2 px-3 rounded-sm focus:outline-none focus:border-2'
                  />
                </div>
              </form>

              <div className='mt-20'>
                <Link to={'/'} className='text-coolGray'>
                  Go back
                </Link>
                <button className='w-[100px] h-[40px] rounded-sm bg-marineBlue text-white'>
                  Next Step
                </button>
              </div>
            </div>
        </div>

        {/* hidden in desktop view */}
        <div className='bg-white px-4 py-3 w-full flex justify-between absolute bottom-0 items-center md:hidden'>
          <Link to={'/'} className='text-coolGray'>
            Go back
          </Link>
          <button className='w-[100px] h-[40px] rounded-sm bg-marineBlue text-white'>
            Next Step
          </button>
        </div>
    </div>
  )
}

export default Homepage