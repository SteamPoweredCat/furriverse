"use client";

import { mobileNavbarItems, sidebarItems } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNavbar = () => { 
  const pathname = usePathname(); 
  return (
    <div className='fixed z-10 bottom-7 w-[380px] h-[80px] left-[calc(50%-190px)] p-2 rounded-full bg-gray-800 sm:hidden'>
      <div className="flex flex-row gap-3 w-full h-full rounded-full">
        {mobileNavbarItems.map((item, index) => (
          <Link href={item.href} key={index} className={cn(`flex flex-col justify-center items-center rounded-full w-full h-full ${item.name === "Create Post" ? "bg-green-500" : ""}`, { "bg-purple-700": pathname.endsWith(item.href) && !pathname.endsWith("/submit") })}>
            <Image src={item.icon} width={50} height={50} alt={item.name} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileNavbar