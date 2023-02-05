import React from 'react'

export default function Gallery2() {
  return (
    <div className='bg-gray-50 w-full'>
    <div class="container mx-auto px-4"> 
                
    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4">
      <div class="md:w-1/2 h-auto px-4">
          <img class="w-full rounded shadow-md" src="/gallery/gallery1.png" alt="" />
        </div>
          <div class="md:w-1/2 h-auto px-4">
          <div class="mb-8"><img class="rounded shadow-md" src="/gallery1.jpg" alt="" /></div>
          <div><img class="rounded shadow-md" src="/gallery2.jpg" alt="" /></div>
        </div>
      </div>
    </section>
                       
    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
        <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
      </div>
    </section>
              
    <section class="pt-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
        <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
        <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
        <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
        <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
        <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
      </div>
    </section>
  
  </div>
  </div>

  )
}
