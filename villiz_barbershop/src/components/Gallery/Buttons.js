import React from 'react'
import {Link} from "gatsby"

export default function Gallery2() {
  return (     
      <div className='flex flex-row justify-center flex-wrap py-10'>
      <div className='pr-4'>
      <Link to="/galeria/"
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-myCamel px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-myCamel focus:ring-offset-2"
      >
        Fotky
      </Link>
      </div>

        <div className='pl-4'>
       <Link to="/galeria/videa"
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-myCamel px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-myCamel focus:ring-offset-2"
        >
        Videá
      </Link>  
          </div>
        </div>

  )
}
