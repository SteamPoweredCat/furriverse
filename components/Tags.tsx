import React from 'react'
import { Button } from './ui/button'

const Tags = ({ tags }: { tags: any[] }) => {
  return (
    <div className="w-full flex flex-wrap gap-2 p-2 mt-5">
      {tags.map(tag => (
         <Button variant="outline" key={tag.id}  className="bg-gray-800 p-5 border-gray-700 hover:border-gray-600 ring-0 text-[13px] text-white">{tag.name}</Button>
      ))}
    </div>
  )
}

export default Tags