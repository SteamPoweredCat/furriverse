"use client";
import Image from 'next/image'
import React from 'react'
import ArtActions from './ArtActions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ArtCardProps {
  art: any;
}

const ArtCard = ({ art }: ArtCardProps) => {
  const router = useRouter();

  return (
    <Link href={`/post/${art?.deviationid}`} className="w-full h-[480px] md:h-[400px] lg:h-[320px] bg-white bg-opacity-10 rounded-lg overflow-clip relative group cursor-pointer">
      <Image src={art?.preview?.src || art?.image || "/images/book_icon.jpg"} width={art?.preview?.width || 1000} height={art?.preview?.height || 1000} className='h-full w-full object-contain relative' alt="art photo" />
      <div className="absolute hidden group-hover:flex flex-col justify-between z-10 bottom-0 w-full h-full bg-gray-800 bg-opacity-25 p-2 ">
        <div className="flex flex-col gap-1 w-full">
          <h1 className='sm:text-xl text-3xl text-white font-bold'>{art.title}</h1>
          <div className="flex gap-2 w-full items-center">
            <Image src={art?.author?.usericon || "/icons/profile.svg"} width={30} height={30} className="rounded-full object-cover" alt="profile" />
            <p className='text-white sm:text-[16px] text-xl font-medium truncate'>{art?.author?.username || art?.artist?.username || "unknown"}</p>
          </div>
        </div>

        <ArtActions post={art} />
      </div>
    </Link>
  )
}

export default ArtCard