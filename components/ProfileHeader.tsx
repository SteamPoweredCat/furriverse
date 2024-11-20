import Image from 'next/image'
import React from 'react'

const ProfileHeader = () => {
  return (
    <div className="sm:min-h-[300px]  w-full bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col max-sm:items-center sm:justify-end max-sm:p-2 p-5 relative">
      <div className="flex items-center  lg:-mb-20 sm:-mb-16  mb-0 sm:ml-5 w-fit relative">
        <div className='lg:size-[250px] sm:size-[200px] size-[150px] bg-gray-750 rounded-full z-10 p-2'>
          <Image src="/icons/profile.svg" width={250} height={250} alt="profile" className="h-full  object-contain" />
        </div>
      </div>      
    </div>
  )
}

export default ProfileHeader