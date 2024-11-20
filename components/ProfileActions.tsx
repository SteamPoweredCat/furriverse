"use client";

import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

interface ProfileActionsProps {
  profileId: string;
}

const ProfileActions = ({ profileId }: ProfileActionsProps) => {
  const user = true;
  const router = useRouter();

  return (
    <div className="sm:absolute max-sm:justify-between max-sm:w-full max-sm:px-10 max-sm:mt-0 top-0 right-10 mt-2 flex gap-2 z-10">
      <Button variant="outline" className='bg-transparent text-white text-lg flex-1'>Follow</Button>
      {user && <Button  className="flex-1 bg-green-500 hover:bg-green-400 text-lg text-gray-900 hover:text-gray-700" onClick={() => router.push(`/profile/${profileId}/edit`)}>Edit Profile</Button>}
    </div>
  )
}

export default ProfileActions