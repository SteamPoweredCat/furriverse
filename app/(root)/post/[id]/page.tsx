import ArtActions from '@/components/ArtActions'
import Comments from '@/components/Comments'
import Tags from '@/components/Tags'
import { fetchArtById, fetchArtCommentsById, fetchToken } from '@/lib/DeviantArt'
import { htmlSanitizer } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const tags = [
  { id: 1, name: "dragon", link: "" },
  { id: 2, name: "furry", link: "" },
  { id: 3, name: "scalie", link: "" },
  { id: 4, name: "bikini", link: "" },
  { id: 5, name: "female", link: "" },
  { id: 6, name: "anthro", link: "" },
  { id: 7, name: "scales", link: "" },
  { id: 8, name: "green", link: "" },
  { id: 9, name: "amber", link: "" },
  { id: 10, name: "brown", link: "" },
  { id: 11, name: "curvy", link: "" },
  { id: 12, name: "sexy", link: "" },
  { id: 13, name: "feminine", link: "" },
  { id: 14, name: "strong", link: "" },
  { id: 15, name: "graceful", link: "" },
  { id: 16, name: "athletic", link: "" },
  { id: 17, name: "charming", link: "" },
  { id: 18, name: "cheerful", link: "" },
  { id: 19, name: "approachable", link: "" },
  { id: 20, name: "friendly", link: "" },
  { id: 21, name: "warm", link: "" },
  { id: 22, name: "earth", link: "" },
  { id: 23, name: "tones", link: "" },
  { id: 24, name: "golden", link: "" },
  { id: 25, name: "light", link: "" },
  { id: 26, name: "emerald", link: "" },
  { id: 27, name: "contrast", link: "" },
  { id: 28, name: "beauty", link: "" },
  { id: 29, name: "natural", link: "" },
  { id: 30, name: "classic", link: "" },
  { id: 31, name: "subtle", link: "" },
  { id: 32, name: "shimmer", link: "" },
  { id: 33, name: "lighter", link: "" },
  { id: 34, name: "accent", link: "" },
  { id: 35, name: "belly", link: "" },
  { id: 36, name: "tail", link: "" },
  { id: 37, name: "blend", link: "" },
]

const comments = [
  { id: 1, username: "FurryLover", text: "This is amazing! I love the colors and the details!", replies: [
    { id: 7, parentId: 1,  username: "DragonLover", text: "Thank you! I'm glad you like it!" },
    { id: 8, parentId: 1,  username: "ArtFan", text: "Great work! I love the character design and the colors!" },
    { id: 9, parentId: 1,  username: "FurryFan", text: "Amazing work! I love the character design and the colors!" },
  ] },
  { id: 2, username: "ArtFan", text: "Great work! I love the character design and the colors!" , replies: [
    { id: 10, parentId: 2,  username: "ArtLover", text: "Stunning dragoness! I love the colors and the details!" },
    { id: 11, parentId: 2,  username: "FurryFan", text: "Amazing work! I love the character design and the colors." , replies: [
      { id: 12, parentId: 12,  username: "DragonLover", text: "Thank you! I'm glad you like it!" },
    ] },
  ] },
  { id: 3, username: "DragonLover", text: "Beautiful dragoness! I love the colors and the details!" ,  },
  { id: 4, username: "FurryFan", text: "Amazing work! I love the character design and the colors!" },
  { id: 5, username: "ArtLover", text: "Stunning dragoness! I love the colors and the details!" },
  { id: 6, username: "DragonFan", text: "Incredible work! I love the character design and the colors!" },

]

const Post = async ({ params: { id }}: { params: { id: string }}) => {
  const accessToken = await fetchToken();
  const deviation = await fetchArtById(accessToken, id);
  const deviationComments = await fetchArtCommentsById(accessToken, id);

  return (
    <div className="page-layout">
      <div className="flex flex-col gap-3 px-8 lg:px-10 pb-10">
        <div className="bg-gray-800 mt-10 sm:h-[700px]  h-[400px] flex justify-center items-center rounded-2xl overflow-clip relative">
          <Image src={deviation?.content?.src || "/images/book_icon.jpg"} width={1000} height={1000} className="h-full object-contain" alt="art photo" />
          {deviation?.excerpt && (
            <div className='flex flex-col absolute w-full bottom-24 left-24'>
            <p className='uppercase text-white font-light'>Literature</p>
            <h1 className="text-5xl font-semibold text-white">{deviation?.title}</h1>
          </div>
          )}
        </div>
        <div className="flex gap-2 w-full items-center">
            <Image src={deviation?.author?.usericon || "/icons/profile.svg"} width={30} height={30} className="rounded-full size-14  object-cover" alt="profile" />
          
            <div className='flex flex-col gap-1'>
              <h1 className="font-bold text-[20px] text-white">{deviation?.title}</h1>
              <Link href={`/profile/${deviation?.author?.username}`} className='cursor-pointer'>
                <p className='text-white  max-md:text-xl font-medium truncate'>by <span className='font-bold hover:text-purple-500'>{deviation?.author?.username}</span></p>
              </Link>
            </div>
        </div>
        
        <div className="sm:w-[240px] mt-2 ml-[10px]">
          <ArtActions mini post={deviation} />
        </div>
        <Tags tags={tags} />
        <div className="flex flex-col gap-5 mt-10">
          <p className="text-white font-light leading-8 whitespace-wrap"> 
            &emsp; {htmlSanitizer( deviation?.excerpt || deviation?.daily_deviation?.body || "")}
          </p>
        </div>

        <Comments comments={deviationComments} />
      </div>
    </div>
  )
}

export default Post