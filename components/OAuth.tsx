import React from 'react'
import { Button } from './ui/button'

const OAuth = () => {
  return (
    <div className="flex w-full gap-3">
      <Button type="button" className="flex-1 text-md font-medium bg-purple-500">Sign Up with DeviantArt</Button>
      <Button type="button" className="border flex-1 text-md font-medium">Sign Up with Google</Button>
    </div>
  )
}

export default OAuth