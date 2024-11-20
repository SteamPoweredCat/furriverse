import PostTabs from '@/components/PostTabs'
import React from 'react'

const Submit = () => {
  return (
    <div className="page-layout">
      <div className='flex flex-col justify-center items-center mx-auto w-full max-w-[900px] gap-10 px-6 lg:px-3'>
        <div className="flex flex-col sm:items-start items-center justify-center w-full text-white px-3 my-12">
          <h1 className="text-4xl font-bold text text-white">Submit Your Artwork</h1>
          <p className="text-lg ml-2 mt-2 text-white">Share your furry art/story with the world!</p>
        </div>

        <PostTabs />
      </div>
    </div>
  )
}

export default Submit