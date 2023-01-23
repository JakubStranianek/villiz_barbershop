import * as React from "react"

const files = [
    {
      source: 'gallery1.jpg',
    },
    {
        source: 'gallery2.jpg',
    },
    {
        source: 'gallery3.jpg',
    }
  ]
  
  export default function Example() {
    return (
       <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {files.map((photo) => (
            <div key={photo.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={photo.source}
                  alt={photo.id + photo.source}
                  className="h-full w-full focus:outline-[#BFAEA8] object-cover object-center lg:h-full lg:w-full"
                />
              </div>             
            </div>
          ))}
        </div>
      </div>
    </div>
    )
  }