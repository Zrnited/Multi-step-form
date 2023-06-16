import React, { useEffect, useState } from 'react'
// import sidebarImg from '../assets/sidebar-mobile.png'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import Plans from '../components/Plans'
import Addons from '../components/Addons';
import Summary from '../components/Summary';
import ThankYou from '../components/ThankYou';
import { useFormik } from 'formik';
import { basicSchema } from '../components/Schemas';

const Homepage = () => {

  // const [plans, setPlans] = useState(false);
  const formClassNames = 'border-[1px] border-coolGray text-marineBlue py-2 px-3 rounded-sm focus:outline-none focus:border-2 focus:border-marineBlue lg:py-3'
  const [isSelected, setIsSelected] = useState(false);

  //add-ons
  const [switchAddon, setSwitchAddon] = useState(false);
  const [addOnsForm, setAddOnsForm] = useState({
    onlineServicePerMonth: false,
    largerStoragePerMonth: false,
    customizableProfilePerMonth: false,
    onlineServicePerYear: false,
    largerStoragePerYear: false,
    customizableProfilePerYear: false
  })

  const [year, setYear] = useState(false);
  const [formCount, setFormCount] = useState(0);

  //finished-up form
  const [finishedForm, setFinishedForm] = useState({
    personalInfo: {
      fullName: "",
      email: "",
      phoneNumber: ""
    },
    selectedPlan: {
      perMonth: "",
      perYear: ""
    },
    pickedAddOns: {
      perMonth: [],
      perYear: []
    }
  });
  console.log(finishedForm);

  //plans
  const monthlyPlans = [
    {
      title: "Arcade",
      price: "$9/mo",
      svg: <svg xmlns="http://www.w3.org/2000/svg"    width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g>
      </svg>
    },
    {
      title: "Advanced",
      price: "12/mo",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fillRule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fillRule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g>
      </svg>
    },
    {
      title: "Pro",
      price: "$15/mo",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fillRule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fillRule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g>
      </svg>
    }
  ]
  const yearlyPlans = [
    {
      title: "Arcade",
      price: "$90/yr",
      svg: <svg xmlns="http://www.w3.org/2000/svg"    width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g>
      </svg>,
      duration: "2 months free"
    },
    {
      title: "Advanced",
      price: "120/yr",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fillRule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fillRule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g>
      </svg>,
      duration: "2 months free"
    },
    {
      title: "Pro",
      price: "$150/yr",
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fillRule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fillRule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g>
      </svg>,
      duration: "2 months free"
    }
  ]

  const increaseFormCount = () => {
    if(formCount !== 5){
      setFormCount(formCount + 1);
    } else {
      return
    }
    // console.log(formCount);
  }

  const decreaseFormCount = () => {
    if(formCount !== 0){
      setFormCount(formCount - 1);
    } else {
      return
    }
    console.log(formCount);
  }

  const onSubmit = (actions)=>{
    alert('Form submitted!');
    actions.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: ""
    },
    validationSchema: basicSchema,
    onSubmit,
  })
  // console.log(formik.values);

  useEffect(()=>{
    if(formCount === 4){
      setYear(true)
    } else {
      setYear(false);
    }
  }, [formCount])

  useEffect(()=>{
    if(formik.values.email && formik.values.fullName && formik.values.phoneNumber){
      setFinishedForm((prevState)=>{
        return {
          ...prevState,
          personalInfo: {
            fullName: formik.values.fullName,
            email: formik.values.email,
            phoneNumber: formik.values.phoneNumber
          }
        }
      })
    } else {
      console.log("Value(s) are missing");
    }
  }, [formik.values])

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

              {/* personal info form */}
              <form onSubmit={formik.handleSubmit} autoComplete='off' className='w-full flex flex-col gap-3 mt-6'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="name" className='text-marineBlue font-medium lg:text-lg'>Name</label>
                  <input 
                    placeholder='e.g. Stephen King'
                    type='text'
                    name='fullName'
                    className={classNames(formClassNames, {
                      'border-red-500': formik.errors.fullName && formik.touched.fullName
                    })}
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.fullName && formik.touched.fullName && (<p className='text-sm text-red-500'>{formik.errors.fullName}</p>)}
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="email" className='text-marineBlue font-medium lg:text-lg'>Email address</label>
                  <input 
                    placeholder='e.g. stephenking@lorem.com'
                    type='email'
                    name='email'
                    className={classNames(formClassNames, {
                      'border-red-500': formik.errors.email && formik.touched.email
                    })}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (<p className='text-sm text-red-500'>{formik.errors.email}</p>)}
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor="phoneNumber" className='text-marineBlue font-medium lg:text-lg'>Phone number</label>
                  <input 
                    placeholder='e.g. +1 234 567 890'
                    type='text'
                    name='phoneNumber'
                    className={classNames(formClassNames, {
                      'border-red-500': formik.errors.phoneNumber && formik.touched.phoneNumber
                    })}
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (<p className='text-sm text-red-500'>{formik.errors.phoneNumber}</p>)}
                </div>
                {/* <button type='submit' className='bg-red-500 py-4 text-white'>
                  Submit
                </button> */}
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
            {formCount === 1 && (<Plans isSelected={isSelected} setIsSelected={setIsSelected} monthlyPlans={monthlyPlans} yearlyPlans={yearlyPlans} />)}
            {formCount === 2 && (<Addons isSelected={switchAddon} setIsSelected={setSwitchAddon} addOnsForm={addOnsForm} setAddOnsForm={setAddOnsForm} />)}
            {(formCount === 3 || formCount === 4) && (<Summary year={year} setYear={setYear} />)}
            {formCount === 5 && (<ThankYou />)}
        </div>

        {/* hidden in desktop view */}
        <div className='bg-white px-4 py-3 w-full flex justify-between absolute bottom-0 items-center md:hidden'>
          <Link onClick={decreaseFormCount} to={'/'} className='text-coolGray'>
            Go back
          </Link>
          {formCount !== 5 && (<button className={classNames('w-[100px] h-[40px] rounded-[5px] bg-marineBlue text-white', {
            'bg-purplishBlue': formCount >= 3,
          })} onClick={increaseFormCount}>
            {formCount >= 3 ? 'Confirm' : 'Next step'}
          </button>)}
        </div>
    </div>
  )
}

export default Homepage