import * as React from "react"
import {motion} from "framer-motion"
import {Link} from "gatsby"

export default function Example() {

  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <motion.div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16"
            initial={{y: -100, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{delay: 1, duration: 1}}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Staň sa najlepšiou verziou</span>{' '}
              <span className="block text-[#BFAEA8] xl:inline">seba samého</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Viac ako nový strih. Toto bude tvoj najlepší strih, pretože my vieme ako to urobiť lepšie. Zverte sa do 
              rúk naším profesionálom, ktorý majú vášeň pre barbierstvo.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <motion.div className="rounded-md shadow"
                whileHover={{scale: [1,1.1]}}
              >              
                <Link
                  to="/#priceList"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#BFAEA8] px-8 py-3 text-base font-medium text-white hover:bg-[#BFAEA8] hover:bg-opacity-70 md:py-4 md:px-10 md:text-lg"
                >
                  Pozri služby
                </Link>
              </motion.div>
              <motion.div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
                whileHover={{scale: [1,1.1]}}
              >
                <Link
                  to="/#kontakt"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-[#BFAEA8] hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Objednaj sa
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
            initial={{x: -100, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{delay: 1, duration: 1}}
        >
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="hero-photo2.jpg"
            alt="hero2"
          />
        </motion.div>
      </main>
    </div>
  )
}
