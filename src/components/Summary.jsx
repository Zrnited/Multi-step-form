import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom';

const Summary = ({finishedForm, increaseCount, decreaseCount}) => {

  const monthlyPricericeArray = finishedForm.pickedAddOns.perMonth?.map(item => item.price);
  const yearlyPricericeArray = finishedForm.pickedAddOns.perYear?.map(item => item.price);

  let monthlySum = 0;
  let yearlySum = 0;

  
  //getting the sum of all the filtered objects returned from the previous array 
  for(let num of monthlyPricericeArray){
    monthlySum = monthlySum + num;
  }
  
  for(let num of yearlyPricericeArray){
    yearlySum = yearlySum + num;
  }

  const totalMonth = monthlySum + finishedForm.selectedPlan.price;
  const totalYear = yearlySum + finishedForm.selectedPlan.price;

  return (
    <div className={classNames('absolute top-24 flex flex-col bg-white p-6 w-[95%] rounded-lg md:static md:w-[70%] lg:w-[700px] lg:px-20')}>
      <div className='flex flex-col gap-2 mb-5'>
        <h1 className='text-marineBlue font-semibold text-2xl tracking-wide lg:text-4xl'>Finishing up</h1>
        <p className='font-medium text-coolGray'>Double-check everything looks OK before confirming.</p>
      </div>
      <div className='bg-slate-100 p-4 rounded-md'>
        <div className='flex flex-row w-full justify-between items-center'>
          <div>
            <h1 className='font-semibold text-marineBlue'>
              {finishedForm.selectedPlan.title}{finishedForm.selectedPlan.type === 'Year' ? ' (Yearly)' : ' (Monthly)'}
            </h1>
            <button className='underline text-coolGray'>Change</button>
          </div>
          <p className='font-semibold text-marineBlue'>{`$${finishedForm.selectedPlan.price}`}{finishedForm.selectedPlan.type === 'Year' ? '/yr' : '/mo'}</p>
        </div>
        <hr className='mt-3' />
        {finishedForm.pickedAddOns.perMonth.length !== 0 && finishedForm.pickedAddOns.perMonth?.map((item, index)=>{
          return (
          <div key={index} className='flex flex-row justify-between items-center my-3'>
            <p className='text-coolGray'>{item.title}</p>
            <p className='font-medium text-marineBlue'>{`+$${item.price}/mo`}</p>
          </div>
          )
        })}
        {finishedForm.pickedAddOns.perYear.length !== 0 && finishedForm.pickedAddOns.perYear?.map((item, index)=>{
          return (
          <div key={index} className='flex flex-row justify-between items-center my-3'>
            <p className='text-coolGray'>{item.title}</p>
            <p className='font-medium text-marineBlue'>{`+$${item.price}/yr`}</p>
          </div>
          )
        })}
      </div>
      <div className='flex flex-row justify-between items-center mt-6 w-[98%]'>
        <p className='text-coolGray'>Total{finishedForm.selectedPlan.type === 'Year' ? ' (per year)' : ' (per month)'}</p>
        <p className='font-semibold text-purplishBlue text-[17px]'>{finishedForm.selectedPlan.type === 'Year' ? `$${totalYear}/yr` : `$${totalMonth}/mo`}</p>
      </div>

      {/* Shown in desktop mode */}
      <div className='hidden mt-20 w-full md:flex justify-between items-center'>
        <Link onClick={decreaseCount} to={'/'} className='text-coolGray hover:underline hover:text-marineBlue transition-all duration-500'>
          Go back
        </Link>
        <button onClick={increaseCount} className='w-[100px] h-[40px] rounded-sm bg-purplishBlue text-white lg:text-lg lg:w-[130px] lg:h-[43px] hover:opacity-95 transition-all ease-in-out delay-100 cursor-pointer'>
          Confirm
        </button>
      </div>
    </div>
  )
}

export default Summary