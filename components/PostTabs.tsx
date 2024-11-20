import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PostForm from "./PostForm";

const PostTabs = () => {
  return (
    <div className='w-full flex flex-col mx-auto '>
      <Tabs defaultValue="art" className="w-full">
        <TabsList className='w-full mx-auto h-15 flex gap-2 bg-gray-700 rounded-xl'>
          {["art", "story"].map(type => (
            <TabsTrigger key={type} value={type} className="flex-1 p-2 text-xl text-gray-200 font-semibold rounded-lg data-[state=active]:bg-gray-800  capitalize">{type}</TabsTrigger>
          ))}
        </TabsList>
        {["art", "story"].map(type => (
          <TabsContent key={type} value={type}>
            <PostForm type={type as ArtType} />
          </TabsContent>
          ))}
      </Tabs>
    </div>
  )
}

export default PostTabs;