import React from 'react'
import Buttons from "../Gallery/Buttons"
const people = [
  {
    "source": '/gallery/img1.png'
  },
  {
    "source": '/gallery/img6.png'
  },
  {
    "source": '/gallery/img3.png'
  },
  {
    "source": '/gallery/img2.png'
  },
  {
    "source": '/gallery/img5.png'
  },
  {
    "source": '/gallery/img4.png'
  },
]

export default function Gallery2() {

  return (
    <div className='bg-gray-50 w-full'>      
      <Buttons />

      <div className="mx-auto px-6 py-10 max-w-7xl sm:px-6 lg:px-8">
        <div role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {people.map(index => {
          return (
          <div key={index + index.source} className="col-span-1 flex flex-col rounded-lg text-center shadow">
            <div className="flex flex-1 flex-col">           
                <img className="w-full h-full rounded-lg" src={index.source} alt="1" />                               
            </div>         
          </div>
          )
        })}
      </div>
      </div>
    </div>

  )
}
