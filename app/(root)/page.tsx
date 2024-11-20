import ArtGallery from '@/components/ArtGallery'
import { fetchArt, fetchToken, } from '@/lib/DeviantArt'
import React from 'react'

const Home = async () => {
  let accessToken = await fetchToken();
  const artData = await fetchArt(accessToken);
  
  return (
    <div className="page-layout">
      <div className='flex flex-col w-full px-6 sm:px-10'>
        <div className="flex flex-col justify-center sm:items-start items-center mx-auto mt-10 py-5 border border-gray-700 rounded-lg">
          <h1 className="text-4xl w-full sm:text-left text-center ml-5 font-bold text-white">Welcome to Furriverse</h1>
          <p className="text-md text-white mt-5 w-[80%] ml-5 leading-8">Furriverse is a vibrant online platform and community dedicated to artists and fans of furry art and anthropomorphic creativity. 
            Inspired by the functionality of DeviantArt, Furriverse offers a space where users can share their original art, animations, stories, 
            and crafts centered around anthropomorphic characters. Artists of all skill levels can showcase their work, receive feedback, and connect 
            with others who share a passion for the furry fandom.
          </p>
        </div>
      
        <ArtGallery data={artData?.results} />
      </div> 
    </div>
  )
}

export default Home