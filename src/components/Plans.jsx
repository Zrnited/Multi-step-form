import React from 'react'
import Switch from './Switch'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import checkmark from '../assets/checkmark.png'

const Plans = ({ isSelected, setIsSelected, monthlyPlans, yearlyPlans, setPlan, finishedForm, increaseFormCount, decreaseFormCount }) => {

  return (
    <div className={classNames('absolute top-24 flex flex-col bg-white p-6 w-[95%] rounded-lg md:static md:w-[70%] lg:w-[700px] lg:px-20', {
      'activity overflow-y-scroll md:overflow-y-auto': isSelected,
    })}>

      {/* Monthly */}
      {!isSelected && (<div>
        <h1 className='text-left text-2xl font-semibold text-marineBlue sm:mb-3 lg:text-4xl'>Select your plan</h1>
        <p className=' text-coolGray text-sm sm:text-base lg:text-lg'>You've got the option of monthly or yearly billing.</p>
        <div className='py-3 flex flex-col gap-3 sm:py-5 sm:gap-4 md:flex-row'>
          {monthlyPlans?.map((plan, index)=>{
            return (
              <div onClick={()=>setPlan(plan)} key={index} className={plan.isActive ? plan.activeClassname : plan.notActiveClassname}>
                <div>
                  {plan.svg}
                </div>
                <div className='flex flex-col'>
                  <h2 className='font-semibold text-marineBlue'>{plan.title}</h2>
                  <p className='text-coolGray'>{`$${plan.price}/mo`}</p>
                </div>
              </div>
            )
          })}
          {/* <img 
            src={checkmark}
            alt='checkmark.jpg'
            className={classNames('opacity-0 absolute w-6 h-6 right-10 md:hidden', {
              'opacity-100 top-[98px] sm:top-[135px]': finishedForm.selectedPlan.title === 'Arcade' && finishedForm.selectedPlan.type === 'Month',
              'opacity-100 top-[198px] sm:top-[225px]': finishedForm.selectedPlan.title === 'Advanced' && finishedForm.selectedPlan.type === 'Month',
              'opacity-100 top-[285px] sm:top-[316px]': finishedForm.selectedPlan.title === 'Pro' && finishedForm.selectedPlan.type === 'Month'
            })}
          /> */}
        </div>
      </div>)}

      {/* Yearly */}
      {isSelected && (<div>
        <h1 className='text-left text-2xl font-semibold text-marineBlue sm:mb-3 lg:text-4xl'>Select your plan</h1>
        <p className='text-coolGray text-sm sm:text-base lg:text-lg'>You've got the option of monthly or yearly billing.</p>
        <div className='py-3 flex flex-col gap-3 sm:py-5 sm:gap-4 md:flex-row'>
          { yearlyPlans?.map((yearlyPlan, index)=>{
            return (
              <div onClick={()=>setPlan(yearlyPlan)} key={index} className={yearlyPlan.isActive ? yearlyPlan.activeClassname : yearlyPlan.notActiveClassname}>
                <div>
                  {yearlyPlan.svg}
                </div>
                <div className='flex flex-col w-full sm:w-auto'>
                  <h2 className='font-semibold text-marineBlue'>{yearlyPlan.title}</h2>
                  <div className='flex flex-row justify-between sm:flex-col sm:justify-normal'>
                    <p className='text-coolGray'>{`$${yearlyPlan.price}/yr`}</p>
                    <p className='text-marineBlue'>{yearlyPlan.duration}</p>
                  </div>
                </div>
              </div>
            )
          })}
          {/* <img 
            src={checkmark}
            alt='checkmark.jpg'
            className={classNames('opacity-0 absolute w-6 h-6 right-10 md:hidden', {
              'opacity-100 top-[103px] sm:top-[145px]': finishedForm.selectedPlan.title === 'Arcade' && finishedForm.selectedPlan.type === 'Year',
              'opacity-100 top-[188px] sm:top-[260px]': finishedForm.selectedPlan.title === 'Advanced' && finishedForm.selectedPlan.type === 'Year',
              'opacity-100 top-[275px] sm:top-[376px]': finishedForm.selectedPlan.title === 'Pro' && finishedForm.selectedPlan.type === 'Year'
            })}
          /> */}
        </div>
      </div>)}

      <div className='bg-slate-100 p-2 flex flex-row justify-around items-center sm:mt-2'>
          <h1 className='font-medium text-coolGray'>Monthly</h1>
          <Switch isSelected={isSelected} setIsSelected={setIsSelected} />
          <h1 className='font-medium text-coolGray'>Yearly</h1>
      </div>

      {/* Shown in desktop mode */}
      <div className='hidden mt-20 w-full md:flex justify-between items-center'>
        <Link onClick={decreaseFormCount} to={'/'} className='text-coolGray hover:underline hover:text-marineBlue transition-all duration-500'>
          Go back
        </Link>
        <button onClick={increaseFormCount} className='w-[100px] h-[40px] rounded-sm bg-marineBlue text-white lg:text-lg lg:w-[130px] lg:h-[43px] hover:opacity-95 transition-all ease-in-out delay-100 cursor-pointer'>
          Next Step
        </button>
      </div>
    </div>
  )
}

export default Plans