import React from 'react'

const ProfileInfo = () => {
  return (
    <div className="flex flex-col gap-5 px-10 mt-10 pb-5">
      <div className="flex flex-col gap-8">
        <div className='flex flex-col gap-5'>
          <h1 className='text-white font-bold text-3xl '>Profile Information</h1>
          <div className='border border-gray-700 rounded-lg p-4 flex flex-col md:flex-row gap-2'>
            <div className='flex-1 flex flex-col gap-2'>
              <div className="flex gap-2 items-center">
                <h3 className="text-xl text-gray-500 font-medium">Birthday:</h3>
                <p className="text-lg text-gray-300">
                  1/19/1999
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <h3 className="text-xl text-gray-500 font-medium">Name:</h3>
                <p className="text-lg text-gray-300">
                  Michael Jones
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <h3 className="text-xl text-gray-500 font-medium">Address:</h3>
                <p className="text-lg text-gray-300 truncate">
                  1234 Fake St. Fake, City, 12345
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <h3 className="text-xl text-gray-500 font-medium">City:</h3>
                <p className="text-lg text-gray-300 truncate">
                  Fake City
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <h3 className="text-xl text-gray-500 font-medium">State:</h3>
                <p className="text-lg text-gray-300 truncate">
                  California
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <h3 className="text-xl text-gray-500 font-medium">Country:</h3>
                <p className="text-lg text-gray-300">
                  United States
                </p>
              </div>
            </div>
            <div className='flex-1 bg-purple'>
              <div className="flex flex-col">
                <h3 className="text-xl text-gray-500 font-medium">My Bio:</h3>
                <p className="text-sm text-gray-300">
                  [Guest Name] is a passionate [profession/expertise], known for their work in [specific field or industry]. With over [X years] of experience, [he/she/they] has made significant contributions to [specific projects, companies, or areas of work]. A frequent speaker and advocate for [relevant topics or causes], [Guest Name] has shared insights and knowledge at numerous events, including [notable events or conferences if applicable].
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-white font-bold text-3xl '>Profile Stats</h1>
          <div className='border border-gray-700 rounded-lg p-4 flex flex-col md:flex-row md:justify-evenly gap-2 md:flex-wrap'>
            
              <div className="flex gap-2 items-center">
                <h3 className="text-2xl text-gray-500 font-bold">Total Posts:</h3>
                <p className="text-xl text-gray-300">
                  12
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <h3 className="text-2xl text-gray-500 font-bold">Total Followers:</h3>
                <p className="text-xl text-gray-300">
                  120
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <h3 className="text-2xl text-gray-500 font-bold">Total Following:</h3>
                <p className="text-xl text-gray-300">
                  100
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <h3 className="text-2xl text-gray-500 font-bold">Total Comments:</h3>
                <p className="text-xl text-gray-300">
                  100
                </p>
              </div>
          </div>
        </div>
      </div>        
    </div>
  )
}

export default ProfileInfo