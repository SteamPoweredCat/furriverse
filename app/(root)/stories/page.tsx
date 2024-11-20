import ArtGallery from '@/components/ArtGallery';
import { fetchArt, fetchStories, fetchToken } from '@/lib/DeviantArt';
import React from 'react'

const Stories = async () => {
  let accessToken = await fetchToken();
  const artData = await fetchStories(accessToken);

  return (
    <div className="page-layout">
      <div className='flex flex-col w-full px-6 sm:px-10'>
        <div className="flex flex-col justify-center sm:items-start items-center py-3 mt-10 ml-5">
          <h1 className="text-4xl w-full sm:text-left text-center font-bold text-white">Stories</h1>
        </div>
        <ArtGallery data={artData?.results} expanded />
      </div>
    </div>
  )
}

export default Stories