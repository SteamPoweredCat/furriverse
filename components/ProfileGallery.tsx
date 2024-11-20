import React from 'react'
import ArtGallery from './ArtGallery'
import { arts } from '@/constants'

const ProfileGallery = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex px-10">
        <h1 className='text-white font-bold text-3xl'>Profile Gallery</h1>
      </div>
      <ArtGallery expanded data={arts} />
    </div>
  )
}

export default ProfileGallery