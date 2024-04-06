import React from 'react'
import DentistImage from '../Assets/DentistImage.jpg';
import logo from '../Assets/logo.png'

const colors = {
    primary: "#060606",
    background: "#f5f5f5",
    disabled: "#D9D9D9"
}

const Example = () => {
  return (
    <div className='w-full h-screen flex items-start'> 
        <div className='relative w-1/2 h-full flex flex-col'>
        <img src={DentistImage} className="w-full h-full object-cover"/>
        </div>
        <div className='w-1/2 h-full bg-{#f5f5f5} flex flex-col p-20 justify-between'>
            <h1 className='text-xl text-{#060606} font-semibold'> Tooth Castle </h1>


            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-col mb-10'>
                    <h3 className='text-2xl font-semibold mb-4'> Login </h3>
                    <p className='text-sm mb-2'> welcome to our webiste, please enter your details. </p>
                </div>
            </div>

            <div className='w-full flex flex-col '>
                <input 
                t/>
            </div>

            <div className='w-full flex items-center justify-center '>
                <p className='text-sm font-normal text-{#060606} '> Dont have a account? <span className='font-semibold underline underline-offset-2 cursor-pointer'> Sign up for free</span></p>

            </div>
        </div>
    </div>
  )
}

export default Example
