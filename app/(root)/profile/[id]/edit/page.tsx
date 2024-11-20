import ProfileForm from '@/components/ProfileForm'
import ProfileHeader from '@/components/ProfileHeader'
import React from 'react'

const EditProfile = () => {
  return (
    <div className='page-layout'>
      <ProfileHeader />
     <div className="mt-24 px-12">
      <ProfileForm />
     </div>
    </div>
  )
}

export default EditProfile