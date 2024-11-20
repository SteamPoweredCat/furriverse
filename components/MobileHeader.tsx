"use client";

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const MobileHeader = () => {
  return (
    <div className='z-50 sticky left-0 top-0 flex flew-row justify-between items-center sm:hidden text-white h-[100px] px-3  w-full bg-gray-800 py-4'>
      <div className='flex flex-row items-center justify-center'>
        <Image src="/icons/logo.svg" width={65} height={65} alt="Furriverse icon" className='mr-2'/>
        <h1 className='text-purple-500 font-bold text-[36px] xl:text-[40px] text-center'>Furriverse</h1>
      </div>

      <Button variant="ghost" onClick={() => {}} className="hover:bg-[#262636] z-10 p-2 h-16 w-16 rounded-full flex justify-center items-center">
        <Image src="/icons/logout.svg" width={40} height={40} alt="logout" className="" />
      </Button>
    </div>
  )
}

export default MobileHeader