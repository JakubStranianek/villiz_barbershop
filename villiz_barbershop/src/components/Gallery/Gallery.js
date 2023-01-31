import * as React from "react"
import { useState, useEffect, useRef } from "react";
import ModalImage from "../ModalImage/ModalImage"
import { motion, useAnimation, useInView } from "framer-motion" 

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
    const [modal, setModal] = useState(false);
    const [actual, setActual] = useState("");
    const ref = useRef(null)
    const isInView = useInView(ref)
    const animation = useAnimation()

    useEffect(() => {
      if (isInView) {
        animation.start({
          x: 0, opacity: 1,
          transition: {
            duration: 1, type:"spring", stiffness: 20
          }
        })
      } else {
        animation.start({
          x: -1000, opacity: 0
        })
      }
    })

    function setValues(e) {
      setModal(!modal);
      setActual(e.target.getAttribute('src'));
    } 

    const closeModal = () => {
      setModal(false);
    }

    return (
       <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
        ref={ref}
        animate={animation}
        >
          {files.map((photo) => (
            <div key={photo.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={photo.source}
                  alt={photo.id + photo.source}
                  className="h-full w-full focus:outline-[#BFAEA8] object-cover object-center lg:h-full lg:w-full"
                  onClick={setValues}                 
                />
              </div>             
            </div>
          ))}
        </motion.div>
      </div>

      {modal && (
        <ModalImage image={actual} close={closeModal}/> 
      )}
    </div>
    )
  }