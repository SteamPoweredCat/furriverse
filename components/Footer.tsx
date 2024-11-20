"use client";
import Image from 'next/image';
import React, { EventHandler, MouseEventHandler } from 'react'
import { Button } from './ui/button';
import Link from 'next/link';



const Footer = () => {

  const signOut: MouseEventHandler = (e) => {
    e.preventDefault();
    console.log('signing out');
  }

  return (
    <div className='footer'>
      <Link href="/profile/1" className="flex flex-row items-center max-lg:hidden w-full flex-1 gap-2">
        <Image src="/icons/profile.svg" width={50} height={50} alt="profile" className="xl:size-[60px] size-[54px]" />

        <div className='flex flex-col justify-center items-start overflow-auto'>
          <p className='text-white xl:text-[20px] text-[18px] font-semibold'>Guest</p>
          <p className='text-gray-300 xl:text-[14px] text-[12px] w-full truncate'>guest@email.com</p>
        </div>
      </Link>

      <Button variant="ghost" onClick={signOut} className="hover:bg-[#262636] z-10 p-2 max-lg:w-full h-full rounded-full flex justify-center items-center">
        <Image src="/icons/logout.svg" width={40} height={40} alt="logout" className="" />
      </Button>
    </div>
  )
}

export default Footer;