import ProfileActions from '@/components/ProfileActions'
import ProfileGallery from '@/components/ProfileGallery'
import ProfileHeader from '@/components/ProfileHeader'
import ProfileInfo from '@/components/ProfileInfo'
import React from 'react'

const Profile = ({ params: { id } }: PageProps) => {

  return (
    <div className="page-layout">
      <ProfileHeader />
      <div className='relative'>
        <div className="flex flex-col sm:mt-12 sm:ml-9 p-5 items-center sm:items-start relative ">
          <h1 className='text-white font-bold text-[24px] sm:text-[36px] lg:text-[48px] leading-[28px] sm:leading-[40px] lg:leading-[52px]'>
            Guest
          </h1>
          <p className='text-gray-300 font-normal text-lg  sm:text-[20px] lg:text-[24px] ml-2'>guest@gmail.com</p>
        </div>
        <ProfileActions profileId={id} />
        <ProfileInfo />
        <ProfileGallery />
      </div>
  </div>
  )
}

export default Profile