"use client";

import { sidebarItems } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Footer from './Footer'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className='flex justify-center items-center mb-5'>
          <Image src="/icons/logo.svg" width={75} height={75} alt="Furriverse icon" className='max-xl:size-16 max-lg:mr-0 mr-2'/>
          <h1 className='text-purple-500 font-bold text-[36px] xl:text-[40px] text-center max-lg:hidden'>Furriverse</h1>
        </Link>

        {sidebarItems.map(item => (
          <Link href={item.href} key={item.name} className={cn('flex gap-3 bg-gray-750 items-center rounded-lg lg:p-2 2xl:p-4 justify-center xl:justify-start', { "bg-purple-700": pathname.endsWith(item.href) })}>
            <div className="relative size-9 max-lg:w-16 max-lg:h-16 max-lg:p-2">
              <Image src={item.icon} alt={item.name} width={30} height={30} className='w-full h-full object-contain' />
            </div>
            <p className='text-[16px] font-semibold max-lg:hidden'>{item.name}</p>
          </Link>
        ))}

        <hr className='border-gray-700 border'/>

        <Link href="/submit" className="flex items-center gap-3 bg-green-500  rounded-lg lg:p-2 2xl:p-4 justify-center xl:justify-start cursor-pointer ">
          <div className='size-9 max-lg:w-16 max-lg:h-16 max-lg:p-2'>
            <Image src="/icons/submit.svg" width={24} height={24} alt="submit icon" className='w-full h-full object-contain' />
          </div>

          <p className='text-gray-900 text-[16px] font-semibold max-lg:hidden'>Create Post</p>
        </Link>
      </nav>

      <div className="flex flex-col gap-5 items-center w-full">
        <Link href={"/profile/1"} className="hidden max-lg:block  bg-gray-700 rounded-md p-1">
          <Image src="/icons/profile.svg" width={30} height={30} alt="profile" className="h-[60px] w-[60px]  object-contain" />
        </Link>
        <Footer />
      </div>
    </div>
  )
}

export default Sidebar